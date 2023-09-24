import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private jwt: JwtHelperService) {}

  async isAuthenticated(): Promise<boolean> {
    let result = false;
    const foundToken = localStorage.getItem('access_token');
    if (foundToken) {
      const token = JSON.parse(foundToken);
      console.log('token', token);
      result = await this.jwt.isTokenExpired(token);
    } else {
      // const lastPageFound = localStorage.setItem("lastPage",);
      result = false;
    }
    return result;
  }
}
