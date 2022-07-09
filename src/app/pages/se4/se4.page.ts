import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-se4',
  templateUrl: './se4.page.html',
  styleUrls: ['./se4.page.scss'],
})
export class Se4Page implements OnInit {
  // Declarar un arreglo para obtener la data typada

  // Declarar una propiedad para guardar los datos
  usuarios: Observable<any>;

  // Inyectar Servicio
  constructor(private dataservice: ServiceService) { }

  ngOnInit() {
    this.dataservice.getUsuarios().subscribe((usuarios)=>{
      console.log(usuarios);

      // Inyectar los datos a la pagina
      this.usuarios = this.dataservice.getUsuarios();
    });
  }

  // Crear evento
  onClick(){
    this.dataservice.getUsuarios().subscribe((usuarios)=>{
      console.log(usuarios);
    });
  }
}
