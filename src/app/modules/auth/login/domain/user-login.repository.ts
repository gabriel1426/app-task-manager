import { UserLoginModel } from '@app/modules/auth/login/domain/user-login.model';

export abstract class UserLoginRepository {
  abstract login(user: UserLoginModel): Promise<boolean>;
}
