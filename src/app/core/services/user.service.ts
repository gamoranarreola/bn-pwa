import { Injectable } from '@angular/core';

import { environment as env } from '../../../environments/environment';
import { ApiDataService } from './api-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiDataService: ApiDataService
  ) { }

  /**
   *
   */
  public getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('__bn_api_current_user'));
  }

  /**
   *
   */
  public me(): Observable<any> {
    return this.apiDataService.readData(`${env.routes.auth.me}`, true, 'get');
  }
}
