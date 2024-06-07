import { Injectable } from '@angular/core';
import { FirebaseAuthentication, User } from "@capacitor-firebase/authentication";


@Injectable({
  providedIn: 'any'
})
export class AuthService {

  constructor() { }

  async signIn(): Promise<User | null> {
      const result = await FirebaseAuthentication.signInWithEmailAndPassword({
        email: 'mail@exmaple.com',
        password: '123456',
      });
      console.log(result.user)
      return result.user;
  }

  async registerUser(): Promise<User | null> {

      const result = await FirebaseAuthentication.createUserWithEmailAndPassword({
        email: 'mail@exmaple.com',
        password: '123456',
      });
      console.log(result.user);
      return result.user;
  }
}
