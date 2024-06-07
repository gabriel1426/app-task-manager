import { inject, Injectable } from '@angular/core';
import { UserRegisterModel } from '@app/modules/auth/register/domain/user-register.model';
import { UseCase } from '@app/core/interface/use-case';
import { UserRegisterRepository } from '@app/modules/auth/register/domain/user-register.repository';

@Injectable({
  providedIn: 'root'
})
export class CaseRegisterService implements UseCase<UserRegisterModel, boolean> {
  private userRegisterService = inject(UserRegisterRepository);
  constructor() {}

  execute(params: UserRegisterModel): Promise<boolean> {
    return this.userRegisterService.register(params);
  }
}
