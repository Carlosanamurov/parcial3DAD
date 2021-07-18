import { Component, OnInit } from '@angular/core';
import { Correo, CorreoL } from 'src/app/Models/correo';
import { RepositorioService } from 'src/app/service/repositorio.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-correos',
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.css']
})
export class CorreosComponent implements OnInit {

  correos: CorreoL[]=[];
  constructor(private servicios:RepositorioService) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(){
    this.servicios.getCorreo()
    .subscribe(
      data =>{
        console.log(data)
        this.correos=data
      },(err) =>{
        console.log("Error en el component Persona")
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
				this.servicios.delCorreo(id).subscribe(
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
