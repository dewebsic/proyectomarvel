import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {first, switchMap} from 'rxjs/operators';
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


  async login(email: string, password: string): Promise<User> {

    try{

      const {user} =  await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      await this.updateUserData(user);

      return user;

    }catch (err){
      console.error('error ', err);
    }

  }

  async register(email: string, password: string):Promise<any> {

    try{
       await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      }catch (err){
        console.error('error ', err);
      }

  }

  async logout() {

    try {

      await this.afAuth.auth.signOut();
      localStorage.clear();

    } catch (err) {
      console.error('error', err);
    }

  }

  async sendVerificationEmail():Promise<void> {
    return (await this.afAuth.auth.currentUser).sendEmailVerification();
  }

  async resetPassword(email:string):Promise<void> {

    try{
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }catch (error){
      console.log('error->',error);
    }
  }

  async loginGoogle(): Promise<User> {

      try{

        const { user } = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
        await this.updateUserData(user);

        return user;
      }catch (error){
        console.log('error->',error);
      }
  }

  private async updateUserData(user:User) {

    const userRef: AngularFirestoreDocument<User> =
        await this.fireStore.doc(`users/${user.uid}`);

      const data: User = {
        uid: user.uid,
        email: user.email,
        emailVerified : user.emailVerified,
        displayName : user.displayName,
        photoURL: user.photoURL,
        role: 'SUBSCRIBER'
      }

      return userRef.set(data,{merge:true});

  }
}
