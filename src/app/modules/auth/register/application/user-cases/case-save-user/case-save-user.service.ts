import { inject, Injectable } from '@angular/core';
import { UserRegisterRepository } from '@app/modules/auth/register/domain/user-register.repository';
import { UserRegisterModel } from '@app/modules/auth/register/domain/user-register.model';
import { UseCase } from '@app/core/interface/use-case';

@Injectable({
  providedIn: 'any'
})
export class CaseSaveUserService implements UseCase<UserRegisterModel, void> {
  private userRegisterService = inject(UserRegisterRepository);
  constructor() {}

  async execute(params: UserRegisterModel): Promise<void> {
    await this.userRegisterService.save(params);
  }
}
