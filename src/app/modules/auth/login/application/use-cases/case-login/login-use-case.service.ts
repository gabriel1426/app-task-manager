import { inject, Injectable } from '@angular/core';
import { UserLoginModel } from '@app/modules/auth/login/domain/user-login.model';
import { UseCase } from '@app/core/interface/use-case';
import { UserLoginRepository } from '@app/modules/auth/login/domain/user-login.repository';

@Injectable({
  providedIn: 'any'
})
export class LoginUseCaseService implements UseCase<UserLoginModel, boolean> {
  private userLoginService = inject(UserLoginRepository);

  constructor() {}

  async execute(params: UserLoginModel): Promise<boolean> {
    return await this.userLoginService.login(params);
  }
}
