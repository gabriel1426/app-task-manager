import { UserRegisterModel } from '@app/modules/auth/register/domain/user-register.model';

export abstract class UserRegisterRepository {
  abstract register(user: UserRegisterModel): Promise<boolean>;
  abstract save(user: UserRegisterModel): Promise<void>;
}
