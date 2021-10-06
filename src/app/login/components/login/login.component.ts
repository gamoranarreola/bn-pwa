/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  FacebookLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';

import jwt_decode from 'jwt-decode';

import { environment as env } from '../../../../environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  inputValidators: any;
  panelLoginFlag = false;
  panelRegisterFlag = false;
  private socialUser: SocialUser;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService,
    private toastController: ToastController
  ) {
    this.inputValidators = env.inputValidators;
  }

  /**
   *
   */
  onLoginSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe((data) => {
      if (data && data.status === 200) {
        const decoded = jwt_decode(data.body.access);

        localStorage.setItem('__bn_api_access', data.body.access);
        localStorage.setItem('__bn_api_refresh', data.body.refresh);
        localStorage.setItem(
          '__bn_api_current_user',
          JSON.stringify({ user_id: decoded['user_id'] })
        );
        this.router.navigate(['home']);
      } else {

        this.toastController.create({
          message: 'Lo sentimos, pero no pudimos validar tus datos de acceso.',
          position: 'top',
          duration: 5000
        }).then(toast => {
          toast.present();
        });
      }
    }, res => {

      this.toastController.create({
        message: res.error.detail,
        position: 'top',
        duration: 5000
      }).then(toast => {
        toast.present();
      });
    });
  }

  /**
   *
   */
  onRegisterSubmit(): void {

    this.authService.register(this.registerForm.value).subscribe((data) => {
      if (data && data.status === 201) {

        this.toastController.create({
          message: '&iexcl;Gracias! Recibir&aacute;s un correo de verificaci&oacute;n con un enlace de activaci&oacute;n de tu cuenta.',
          position: 'top',
          duration: 5000
        }).then(toast => {
          toast.present();
          this.registerForm.reset();
        });
      } else {

        this.toastController.create({
          message: 'Lo sentimos, pero no pudimos procesar tu registro.',
          position: 'top',
          duration: 5000
        }).then(toast => {
          toast.present();
        });
      }
    }, res => {

      this.toastController.create({
        message: res.error.detail,
        position: 'top',
        duration: 5000
      }).then(toast => {
        toast.present();
      });
    });
  }

  /**
   *
   */
  facebookLogin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['home']);
    }

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(128),
        ]),
      ]),
      password: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ]),
      ]),
    });

    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(128),
        ]),
      ]),
      first_name: new FormControl('', [
        Validators.compose([
          Validators.pattern(env.inputValidators.name.pattern),
          Validators.required
        ])
      ]),
      last_name: new FormControl('', [
        Validators.compose([
          Validators.pattern(env.inputValidators.name.pattern),
          Validators.required
        ]),
      ]),
      password: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ]),
      ]),
      password_confirm: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ]),
      ]),
    });

    this.registerForm.setValidators([
      ValidatePassword.MatchPassword
    ]);

    this.socialAuthService.authState
      .pipe(
        switchMap((user: SocialUser) => {
          if (user && user.authToken) {
            this.socialUser = user;
            return this.authService.convertToken(
              user.provider.toLowerCase(),
              user.authToken
            );
          } else {
            return throwError(new Error('An unexpected error occurred.'));
          }
        })
      )
      .subscribe((res) => {
        if (res.status === 200) {
          localStorage.setItem(
            '__bn_api_current_user',
            JSON.stringify(this.socialUser)
          );
          localStorage.setItem('__bn_api_access', res.body.access_token);
          localStorage.setItem('__bn_api_refresh', res.body.refresh_token);
          this.router.navigate(['service-categories']);
        }
      });
  }
}

class ValidatePassword {

  static MatchPassword(abstractControl: AbstractControl): ValidationErrors | null {

    const password = abstractControl.get('password')?.value;
    const passwordConfirm = abstractControl.get('password_confirm')?.value;

    if (password !== passwordConfirm) {
      return { matchPasswordError: true };
    } else {
      return null;
    }
  }
}
