import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthHeaderService {

  constructor() { }

  /**
   *
   */
  public jwtOrBearer(): string {

    const currentUser = JSON.parse(localStorage.getItem('__bn_api_current_user'));

    if (currentUser.hasOwnProperty('provider') && currentUser.provider === 'FACEBOOK') {
      return 'Bearer';
    } else {
      return 'JWT';
    }
  }
}
