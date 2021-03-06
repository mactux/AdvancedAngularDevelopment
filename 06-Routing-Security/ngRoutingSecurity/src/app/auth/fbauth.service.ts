import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { SetToken } from './store/actions/auth.actions';
import { AuthState } from './store/reducers/auth.reducer';
@Injectable({
  providedIn: 'root'
})
export class FBAuthService {
  constructor(
    private fireAuth: AngularFireAuth,
    private store: Store<AuthState>
  ) {
    this.onUserChanged();
  }

  private onUserChanged() {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user != null)
        user.getIdToken().then(token => {
          this.store.dispatch(new SetToken(token));
        });
    });
  }

  createUser(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logOn(user, password) {
    return this.fireAuth.auth
      .signInWithEmailAndPassword(user, password)
      .catch(err => {
        console.log('Error logging in', err);
        return err;
      });
  }

  logOff() {
    return this.fireAuth.auth
      .signOut()
      .catch(err => console.log('Error logging out', err));
  }
}
