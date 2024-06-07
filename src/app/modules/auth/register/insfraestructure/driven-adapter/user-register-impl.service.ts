import { Injectable } from '@angular/core';
import { UserRegisterRepository } from '@app/modules/auth/register/domain/user-register.repository';
import { UserRegisterModel } from '@app/modules/auth/register/domain/user-register.model';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterImplService implements UserRegisterRepository {
  constructor() {}

  async register(params: UserRegisterModel): Promise<boolean> {
    try {
      const user = await FirebaseAuthentication.createUserWithEmailAndPassword({
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
