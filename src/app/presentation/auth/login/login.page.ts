import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar, IonText, IonButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { UserLoginRepository } from '@app/modules/auth/login/domain/user-login.repository';
import { UserLoginModel } from '@app/modules/auth/login/domain/user-login.model';
import { CaseLoginService } from '@app/modules/auth/login/application/use-cases/case-login/case-login.service';
import { UserLoginImplService } from '@app/modules/auth/login/insfrastructure/driven-adapter/user-login-impl.service';
import { IonicModule } from '@ionic/angular';

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
    CaseLoginService
  ],
  imports: [IonicModule, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TranslateModule, ReactiveFormsModule]
})
export class LoginPage {
  private userLoginService = inject(CaseLoginService);

  constructor() {
    this.login();
  }

  async login() {
    const params: UserLoginModel = {
      email: 'mail@exmaple.com',
      password: '123456'
    };
    await this.userLoginService.execute(params);
  }



  loginForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(8)])
  },
  );

  async registerUser() {
  }

  isInvalidField(control: AbstractControl): boolean {
return false;
  }
}
