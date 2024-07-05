import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRegisterModel } from '@app/modules/auth/register/domain/user-register.model';
import { CaseRegisterService } from '@app/modules/auth/register/application/user-cases/case-register/case-register.service';
import { UserRegisterRepository } from '@app/modules/auth/register/domain/user-register.repository';
import { UserRegisterImplService } from '@app/modules/auth/register/insfraestructure/driven-adapter/user-register-impl.service';
import { IonicModule } from '@ionic/angular';
import { confirmPasswordValidator } from '@app/presentation/utils/confirm-password.validator';
import { PASSWORD_MIN_LEN } from '@app/modules/auth/register/domain/user-valitions';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule, TranslateModule]
})
export class RegisterPage {
  private caseRegisterService = inject(CaseRegisterService);

  registerForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(PASSWORD_MIN_LEN)]),
    confirmPassword: new FormControl<string>('', [Validators.required]),
  },
  { validators: confirmPasswordValidator }
  );

  async registerUser() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const params: UserRegisterModel = {
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
      name: 'New',
      lastName: 'User'
    };
    await this.caseRegisterService.execute(params);
  }

  isInvalidField(control: AbstractControl): boolean {
    const resp = control.touched && control.invalid;
    return resp;
  }
}
