import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {first} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public user: User;

  constructor(public afAuth: AngularFireAuth) { }


  async login(email: string, password: string){
    try{

      return await this.afAuth.auth.signInWithEmailAndPassword(email, password);

    }catch (err){
      console.error('error ', err);
    }
  }
  async register(email: string, password: string){
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

  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async sendVerificationEmail():Promise<void> {
    return (await this.afAuth.auth.currentUser).sendEmailVerification();
  }
}
