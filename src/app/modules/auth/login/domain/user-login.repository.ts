import { UserLogin } from '@app/modules/auth/login/domain/user-login';

export abstract class UserLoginRepository {
  abstract login(user: UserLogin): Promise<boolean>;
}
