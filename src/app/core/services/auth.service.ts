/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';
import { AuthHeaderService } from './auth-header.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: HttpHeaders;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private authHeaderService: AuthHeaderService
  ) { }

  /**
   *
   * @param data
   */
  public register(data: any): Observable<any> {

    return this.httpClient
      .post<any>(`${env.apiHost}${env.routes.auth.register}`, data, {observe: 'response'})
      .pipe(
        map((res: HttpResponse<any>) => res)
      );
  }

  /**
   *
   * @param data
   */
  public login(data: any): Observable<any> {

    return this.httpClient
      .post<any>(`${env.apiHost}${env.routes.auth.login}`, data, {observe: 'response'})
      .pipe(
        map((res: HttpResponse<any>) => res)
      );
  }

  /**
   *
   */
  public logout(): void {

    this.router.navigate(['home']).then(() => {
      localStorage.removeItem('__bn_api_access');
      localStorage.removeItem('__bn_api_refresh');
      localStorage.removeItem('__bn_api_current_user');
    });
  }

  /**
   *
   * @param provider
   * @param token
   */
  public convertToken(provider: string, token: string): Observable<any> {

    const data: any = {
      client_id: env.oauth2[provider].client_id,
      client_secret: env.oauth2[provider].client_secret,
      grant_type: 'convert_token',
      backend: provider,
      token
    };

    return this.httpClient
      .post(`${env.apiHost}${env.routes.auth.convertToken}`, data, {observe: 'response'})
      .pipe(
        map((res: HttpResponse<any>) => res)
      );
  }

  /**
   *
   */
  public isAuthenticated(): boolean {
    return (typeof localStorage.getItem('__bn_api_access') === 'string') ? true : false;
  }

    /**
   *
   */
     public me(id: string): Observable<any> {
      const headers = {};

      headers['Content-Type'] = 'application/json';
    
        headers['Authorization'] = `${this.authHeaderService.jwtOrBearer()} ${localStorage.getItem('__bn_api_access')}`;
      
  
      this.headers = new HttpHeaders(headers);
      return  this.httpClient.get<any[]>(`${env.apiHost}${env.routes.auth.me}?id=${id}`, {
        observe: 'response',
        headers: this.headers
      }).pipe(
        map((res: HttpResponse<any>) => res.body)
      );
      
      
      // this.httpClient
      // .get<any>(`${env.apiHost}${env.routes.auth.me}`, data, {
      //   observe: 'response',
      //   headers: this.headers
      // })
      // .pipe(
      //   map((res: HttpResponse<any>) => res)
      // );
    
    }
}
