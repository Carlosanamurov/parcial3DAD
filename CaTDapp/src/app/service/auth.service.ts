import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User= new User();
  private URL= 'http://localhost:3000/api/auth/';
  
  constructor( private http: HttpClient, private router:Router, private jwtHelper:JwtHelperService) { }
  signin(user:User){
    return this.http.post(`${this.URL}`,user);
  }
  
  isAuth():boolean {
    
   const token = localStorage.getItem('token');
   if (this.jwtHelper.isTokenExpired('token') || !localStorage.getItem('token')) {
     return false;
   }
  return true;
  
   
 }
}
