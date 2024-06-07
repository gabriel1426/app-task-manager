import { inject, Injectable } from '@angular/core';
import { UserLogin } from '@app/modules/auth/login/domain/user-login';
import { UseCase } from '@app/core/interface/use-case';
import { UserLoginRepository } from '@app/modules/auth/login/domain/user-login.repository';

@Injectable({
  providedIn: 'any'
})
export class CaseLoginService implements UseCase<UserLogin, boolean> {
  private userLoginService = inject(UserLoginRepository);

  constructor() {}

  async execute(params: UserLogin): Promise<boolean> {
    return await this.userLoginService.login(params);
  }
}
