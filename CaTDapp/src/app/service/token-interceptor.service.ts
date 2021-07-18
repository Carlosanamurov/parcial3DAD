import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{
   intercept( req:any, next:any){
      const token = localStorage.getItem('token');
     const tokenHeader = req.clone({
        setHeaders:{
          Autorization:`Bearer ${token}`
        }

     });
     return next.handle(tokenHeader)
   }

  constructor() { }
}
