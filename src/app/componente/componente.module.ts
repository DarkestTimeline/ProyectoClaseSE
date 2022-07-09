import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    // Declarar modulo
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // Exportar header personalizado
    HeaderComponent
  ]
})
export class ComponenteModule { }
