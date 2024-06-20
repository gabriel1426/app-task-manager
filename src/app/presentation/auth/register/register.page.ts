import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { UserRegisterModel } from '@app/modules/auth/register/domain/user-register.model';
import { CaseRegisterService } from '@app/modules/auth/register/application/user-cases/case-register/case-register.service';
import { UserRegisterRepository } from '@app/modules/auth/register/domain/user-register.repository';
import { UserRegisterImplService } from '@app/modules/auth/register/insfraestructure/driven-adapter/user-register-impl.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  providers: [
    CaseRegisterService,
    {
      provide: UserRegisterRepository,
      useClass: UserRegisterImplService
    }
  ],
  imports: [CommonModule, IonicModule, FormsModule]
})
export class RegisterPage {
  private caseRegisterService = inject(CaseRegisterService);

  constructor() {
  }

  async register() {
    const params: UserRegisterModel = {
      email: 'Ggabrielcontreras1426@gmail.com',
      password: '123456',
      name: 'Gabriel',
      lastName: 'Contreras'
    };
    await this.caseRegisterService.execute(params);
  }
}
