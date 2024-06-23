import { Injectable } from '@angular/core';
import { UserLoginRepository } from '@app/modules/auth/login/domain/user-login.repository';
import { UserLoginModel } from '@app/modules/auth/login/domain/user-login.model';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

@Injectable({
  providedIn: 'any'
})
export class  UserLoginImplService implements UserLoginRepository {
  constructor() {}

  async login(params: UserLoginModel): Promise<boolean> {
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
