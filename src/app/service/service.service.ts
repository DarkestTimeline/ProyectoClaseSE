import { Injectable } from '@angular/core';

// Agregar HTTPClient
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // Injectar ell controlador del servicio
  constructor(private http: HttpClient) { }

  // Crear metodo para traer usuarios
  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
