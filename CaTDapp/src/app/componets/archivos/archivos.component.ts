import { Component, OnInit } from '@angular/core';
import { Archivo, ArchivoL } from 'src/app/Models/archivo';
import { RepositorioService } from 'src/app/service/repositorio.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {
  archivos: ArchivoL[]=[];
  archivoModel: Archivo= new Archivo();

  constructor(private servicios:RepositorioService) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(){
    this.servicios.getArchi()
    .subscribe(
      data =>{
        console.log(data)
        this.archivos=data
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

   view(url:any){
     this.archivoModel.url=url;
     console.log(this.archivoModel);
   }

}
