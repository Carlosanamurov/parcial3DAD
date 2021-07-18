import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Archivo } from '../Models/archivo';
import { Correo } from '../Models/correo';

import { Persona } from '../Models/persona';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  private URL='http://localhost:3000/api/auth';

  constructor(private http:HttpClient) { }
  //persona
  getPersonas(): Observable<any>{
    return this.http.get(this.URL+'/persona')
  }
  delPersona(id:String){
    return this.http.delete(`${this.URL}/persona/delete/${id}`);
  }
  savePersona(persona:Persona){
    return this.http.post(`${this.URL}/persona/add/`,persona);
  }


  //usuario
  getUser(): Observable<any>{
    return this.http.get(this.URL+'/users')
  }
  delUser(id:String){
    return this.http.delete(`${this.URL}/users/delete/${id}`);
  }
  saveuser(user:User){
    return this.http.post(`${this.URL}/users/add/`,user);
  }
  


  //correo
  send(correo:Correo){
  return this.http.post(`${this.URL}/mail/send/`,correo);
  }
  getCorreo(): Observable<any>{
    return this.http.get(this.URL+'/mail')
  }
  delCorreo(id:String){
    return this.http.delete(`${this.URL}/mail/delete/${id}`);
  }

  
  //archivo
  savearchivo(archivo:Archivo){
    return this.http.post(`${this.URL}/archivos/add/`,archivo);
  }
  getArchi(): Observable<any>{
    return this.http.get(this.URL+'/archivos')
  }
  delArchi(id:String){
    return this.http.delete(`${this.URL}/archivos/delete/${id}`);
  }
}
