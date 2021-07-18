import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { AuthService } from '../service/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User = new User();
  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.users);
    this.authService.signin(this.users)
    .subscribe(
      (res:any)=>{
        console.log(res);
        swal.fire(
         'Credenciales exitosos!',
         'Bienvenidos a CaTDoc',
         'success') 
        localStorage.setItem('token', res.accessToken);
        this.router.navigate(['/persona']);
      }
    )

  }
}
