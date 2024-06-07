import { Injectable } from '@angular/core';
import { UserLoginRepository } from '@app/modules/auth/login/domain/user-login.repository';
import { UserLogin } from '@app/modules/auth/login/domain/user-login';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

@Injectable({
  providedIn: 'any'
})
export class UserLoginService implements UserLoginRepository {
  constructor() {}

  async login(params: UserLogin): Promise<boolean> {
    try {
      const user = await FirebaseAuthentication.signInWithEmailAndPassword({
        email: params.email,
        password: params.password
      });
      console.log(user.user);
      return true;
    } catch {
      return false;
    }
  }
}
