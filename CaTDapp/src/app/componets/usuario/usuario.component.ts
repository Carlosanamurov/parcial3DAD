import { Component, HostBinding, OnInit,ElementRef,ViewChild} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import {finalize} from 'rxjs/operators';
import { Archivo } from 'src/app/Models/archivo';
import { Correo } from 'src/app/Models/correo';
import { User, UserL } from 'src/app/Models/user';
import { RepositorioService } from 'src/app/service/repositorio.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  @HostBinding('class') classes = 'row'; 
  usuarios: UserL[]=[];
  correos: Correo = new Correo();
  archivos: Archivo= new Archivo();

  constructor( private storage: AngularFireStorage,private services:RepositorioService , private router:Router) { }
  @ViewChild('imageUser') inputImageUser?: ElementRef;
  uploadPercent!: Observable<any>;
  urlImage!: Observable<any>;
  ngOnInit(): void {
    this.list();
  }

  onUpload(e:any){
    this.archivos.nombre=e.target.files[0].name;
    this.archivos.tipo=e.target.files[0].type;
       const id =Math.random().toString(36).substring(2);
       const file = e.target.files[0];
       const filePath=`uploads/profile_${id}`;
       const ref = this.storage.ref(filePath);
       const task = this.storage.upload(filePath,file);
       this.uploadPercent = task.percentageChanges();
       task.snapshotChanges().pipe(  finalize(() => this.urlImage = ref.getDownloadURL())  ).subscribe();
       
  }
 list(){
   this.services.getUser().subscribe(
     res=>{
       console.log(res)
       this.usuarios=res;
     }, err=> console.error(err)
   );
 }
 dato(id:any,mail:any){
   this.correos.idusuario=id;
   this.correos.destinario=mail;

 }
 sendMail(){
   console.log(this.correos);
   this.services.send(this.correos)
   .subscribe(
     res =>{
       swal.fire('Nuevo Correo', `Se envió con exito a ${this.correos.destinario} `, "success")
       this.correos.titulo='';
       this.correos.mensaje='';
       this.router.navigate(['/correo'])
       
     }
   )
 }
 capture(id:any){
   this.archivos.idusuario=id;
 }
 savArchi(){
  this.archivos.url=this.inputImageUser?.nativeElement.value;
  this.services.savearchivo(this.archivos)
  .subscribe(
    res =>{
      swal.fire('Photo Subida', `Se Subió con exito  ${this.archivos.nombre} `, "success")
      this.archivos.nombre='';
      this.archivos.tipo='';
      this.archivos.url='';
      this.router.navigate(['/usuario'])
    }
  )
   
 }

}
