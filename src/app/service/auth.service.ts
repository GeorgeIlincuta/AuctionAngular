import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logedIn:boolean = false;

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

  getFieldFromJWT(field: string): string {
    const token = localStorage.getItem("jwt");
    if (!token) {return '';}
    const dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[field];
  }
 
  login(email:string, password:string) {
    const body = {
      Email:email,
      Password:password
    }
    this.logedIn = true;
    console.log(body);
    return this.http.post(environment.USER_API + 'login', body);
  }

  logOut() {
    localStorage.removeItem("jwt");
    this.logedIn = false;
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