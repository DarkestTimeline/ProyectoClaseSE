import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Crear la funcion onClickSE1()
  onClickSE1(){
    console.log("Navegando a pagina SE1")
  }

  // Crear la funcion onClickSE2()
  onClickSE2(){
    console.log("Navegando a pagina SE2")
  }

  // Crear la funcion onClickSE2()
  onClickSE3(){
    console.log("Navegando a pagina SE3")
}
// Crear la funcion onClickSE2()
onClickSE4(){
  console.log("Navegando a pagina SE4")
}
}
