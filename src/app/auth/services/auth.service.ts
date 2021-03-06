import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {switchMap} from 'rxjs/operators';
import {auth} from 'firebase/app';
import {Observable, of} from 'rxjs';
import {User} from '../../shared/interfaces/user';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {RoleValidator} from '../helpers/roleValidator';

@Injectable({
  providedIn: 'root'
})

export class AuthService  extends RoleValidator{

  public user$:Observable<User>;

  constructor(public afAuth: AngularFireAuth, private fireStore: AngularFirestore) {
    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.fireStore.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }


  public async login(email: string, password: string): Promise<User> {

    try{

      const {user} =  await this.afAuth.auth.signInWithEmailAndPassword(email, password);

      this.fireStore.doc<User>(`users/${user.uid}`).valueChanges().subscribe(resp => {
        const updateUser : User = {
          uid: resp.uid,
          email: resp.email,
          emailVerified : user.emailVerified,
          displayName : resp.displayName,
          photoURL: resp.photoURL,
          role: 'SUBSCRIBER'
        }
        this.updateUserData(updateUser);
      });

      return user;

    }catch (err){
      console.error('error ', err);
    }

  }

  public async register(email: string, password: string):Promise<any> {

    try{

       let result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
       return result.user;
      }catch (err){
        console.error('error ', err);
      }

  }

  public async logout() {

    try {

      await this.afAuth.auth.signOut();

    } catch (err) {
      console.error('error', err);
    }

  }

  public async sendVerificationEmail():Promise<void> {
    return (await this.afAuth.auth.currentUser).sendEmailVerification();
  }

  public async resetPassword(email:string):Promise<void> {

    try{
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }catch (error){
      console.log('error->',error);
    }
  }

  public async loginGoogle(): Promise<User> {

      try{

        const { user } = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())

        const newUser: User = {
          uid: user.uid,
          email: user.email,
          emailVerified : user.emailVerified,
          displayName : user.displayName,
          photoURL: user.photoURL,
          role: 'SUBSCRIBER'
        };
        await this.updateUserData(newUser);
        return newUser;
      }catch (error){
        console.log('error->',error);
      }
  }

  public async updateUserData(user:User) {

    const userRef: AngularFirestoreDocument<User> =
        await this.fireStore.doc(`users/${user.uid}`);
      return userRef.set(user,{merge:true});

  }
}
