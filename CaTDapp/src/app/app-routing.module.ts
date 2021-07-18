import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivosComponent } from './componets/archivos/archivos.component';
import { CorreosComponent } from './componets/correos/correos.component';
import { PersonaComponent } from './componets/persona/persona.component';
import { UsuarioComponent } from './componets/usuario/usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  { 
    path:'navbar', component:NavbarComponent,canActivate:[AuthGuard]
  },
  {
    path: 'archivo', component:ArchivosComponent,canActivate:[AuthGuard]
  },
  {
    path: 'correo', component:CorreosComponent,canActivate:[AuthGuard]
  },
  {
    path:'usuario', component:UsuarioComponent,canActivate:[AuthGuard]
  },
  {
    path:'persona', component:PersonaComponent,canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
