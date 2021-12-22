/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';
import { AuthHeaderService } from './auth-header.service';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private headers: HttpHeaders;

  constructor(
    private httpClient: HttpClient,
    private authHeaderService: AuthHeaderService
  ) { }

  /**
   *
   * @param url
   * @param auth
   * @param method
   * @param params
   */
  public getData(url: string, auth: boolean, method: string, params?: any): Observable<any> {
    
    let request: Observable<any>;

    const headers = {};

    headers['Content-Type'] = 'application/json';
    
    if (auth) {
      headers['Authorization'] = `${this.authHeaderService.jwtOrBearer()} ${localStorage.getItem('__bn_api_access')}`;
    }

    this.headers = new HttpHeaders(headers);

    if (method === 'get') {
      
      console.log(env.apiHost);
      console.log(url);
      console.log('44444444');
      request = this.httpClient.get<any[]>(`${env.apiHost}${url}?format=json`, {
        observe: 'response',
        headers: this.headers
      });
    }

    if (method === 'post') {
      request = this.httpClient.post<any[]>(`${env.apiHost}${url}`, params, {
        observe: 'response',
        headers: this.headers
      });
    }
    
    return request
      .pipe(
        map((res: HttpResponse<any>) => res.body)
      );
  }

  /**
   *
   */
  public sendData(url: string, auth: boolean, params?: any): Observable<any> {

    const headers = {};

    headers['Content-Type'] = 'application/json';

    if (auth) {
      headers['Authorization'] = `${this.authHeaderService.jwtOrBearer()} ${localStorage.getItem('__bn_api_access')}`;
    }

    this.headers = new HttpHeaders(headers);
    return this.httpClient.post<any[]>(`${env.apiHost}${url}`, params, {
      observe: 'response',
      headers: this.headers
    }).pipe(
      map((res: HttpResponse<any>) => res.body)
    );
  }

}
