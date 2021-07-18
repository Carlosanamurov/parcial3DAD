import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private authService: AuthService){
   
  }
  canActivate(): boolean {
    if (!this.authService.isAuth) {
      console.log('El token no es valido o ya expiro');
      return false;
      
    }
    return true;
  }
  
}
