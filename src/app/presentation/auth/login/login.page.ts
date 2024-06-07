import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { UserLoginService } from '@app/modules/auth/login/insfrastructure/driven-adapter/user-login.service';
import { UserLoginRepository } from '@app/modules/auth/login/domain/user-login.repository';
import { UserLogin } from '@app/modules/auth/login/domain/user-login';
import { CaseLoginService } from '@app/modules/auth/login/application/use-cases/case-login/case-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  providers: [
    {
      provide: UserLoginRepository,
      useClass: UserLoginService
    },
    CaseLoginService
  ],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule]
})
export class LoginPage {
  private userLoginService = inject(CaseLoginService);

  constructor() {
    this.login();
  }

  async login() {
    const params: UserLogin = {
      email: 'mail@exmaple.com',
      password: '123456'
    };
    await this.userLoginService.execute(params);
  }
}
