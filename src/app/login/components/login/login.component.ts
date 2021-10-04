/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

import jwt_decode from 'jwt-decode';

import { environment as env } from '../../../../environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';
import { switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  inputValidators: any;

  private socialUser: SocialUser;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService,
  ) {
    this.inputValidators = env.inputValidators;
  }

  /**
   *
   */
  onSubmit(): void {

    this.authService.login(this.loginForm.value).subscribe(data => {

      if (data && data.status === 200) {

        const decoded = jwt_decode(data.body.access);

        localStorage.setItem('__bn_api_access', data.body.access);
        localStorage.setItem('__bn_api_refresh', data.body.refresh);
        localStorage.setItem('__bn_api_current_user', JSON.stringify({user_id: decoded['user_id']}));
        this.router.navigate(['home']);
      }
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
          Validators.maxLength(128)
        ])
      ]),
      password: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ])
    });

    this.socialAuthService.authState.pipe(
      switchMap((user: SocialUser) => {
        if (user && user.authToken) {
          this.socialUser = user;
          return this.authService.convertToken(user.provider.toLowerCase(), user.authToken)
        } else {
          return throwError(new Error('An unexpected error occurred.'));
        }
      })
    ).subscribe((res) => {
      if (res.status === 200) {
        localStorage.setItem('__bn_api_current_user', JSON.stringify(this.socialUser));
        localStorage.setItem('__bn_api_access', res.body.access_token);
        localStorage.setItem('__bn_api_refresh', res.body.refresh_token);
        this.router.navigate(['service-categories']);
      }
    });

  }

}
