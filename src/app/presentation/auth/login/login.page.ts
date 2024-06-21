import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { UserLoginRepository } from '@app/modules/auth/login/domain/user-login.repository';
import { UserLoginModel } from '@app/modules/auth/login/domain/user-login.model';
import { LoginUseCaseService } from '@app/modules/auth/login/application/use-cases/case-login/login-use-case.service';
import { UserLoginImplService } from '@app/modules/auth/login/insfrastructure/driven-adapter/user-login-impl.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  providers: [
    {
      provide: UserLoginRepository,
      useClass: UserLoginImplService
    },
    LoginUseCaseService
  ],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule]
})
export class LoginPage {
  private loginUseCase = inject(LoginUseCaseService);

  constructor() {
    this.login();
  }

  async login() {
    const params: UserLoginModel = {
      email: 'mail@exmaple.com',
      password: '123456'
    };
    await this.loginUseCase.execute(params);
  }
}
