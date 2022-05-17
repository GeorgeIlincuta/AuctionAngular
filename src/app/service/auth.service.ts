import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

 
  login(email:string, password:string) {
    const body = {
      Email:email,
      Password:password
    }
    return this.http.post(environment.USER_API + 'login', body);
  }

  logOut() {
    localStorage.removeItem("jwt");
  }

  register(username:string, email:string, password:string) {
    const body = {
      UserName:username,
      Email:email,
      Password:password
    }
    return this.http.post(environment.USER_API + 'register', body)
  }
}