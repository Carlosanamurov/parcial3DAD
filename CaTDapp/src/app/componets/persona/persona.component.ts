import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Persona } from 'src/app/Models/persona';
import { User } from 'src/app/Models/user';
import { RepositorioService } from 'src/app/service/repositorio.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
 
  personaModel:Persona= new Persona();
  personas: Persona[]=[];
  userModel:User =new User();

  constructor(private servicios:RepositorioService,private router:Router) { }

  ngOnInit(): void {
    this.readAll();
  }
  readAll(){
    this.servicios.getPersonas()
    .subscribe(
      data =>{
        console.log(data)
        this.personas=data
      },(err) =>{
        console.log("Error en el component Persona")
      }
    )
  }

  save(){
    delete this.personaModel.idpersona;
    this.servicios.savePersona(this.personaModel)
    .subscribe(
      res => {
        this.readAll();
        swal.fire('Nueva Persona', `Persona ${this.personaModel.nombres} creado con exito`, "success")
        this.personaModel.nombres='';
        this.personaModel.apellidos='';
        this.personaModel.telefono='';
      }
    )

  }
  createU(id:any){

    console.log(id);
     this.userModel.idpersona=id;

  }
 
  savU(){
    delete this.userModel.idusuario;
    this.servicios.saveuser(this.userModel)
    .subscribe(
      res =>{
        swal.fire('Nueva Persona', `Persona ${this.personaModel.nombres} creado con exito`, "success")
        this.userModel.password='';
        this.userModel.username='';
        this.router.navigate(['/usuario'])
        
      }
    )
  }

  del(id:any){
		swal.fire({
			title: 'Estas seguro?',
			text: "No podras reverti esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete!'
		  }).then((result) => {
			if (result.isConfirmed) {
				this.servicios.delPersona(id).subscribe(
					res=> {
						console.log(res);
						this.readAll();
						swal.fire(
						   'Eliminado!',
						   'El registro ha sido eliminado.',
						   'success') 
					},
					err => console.error(err)
				)
			}
		  })



		 console.log(id)
		
	 }




}
