import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-se1',
  templateUrl: './se1.page.html',
  styleUrls: ['./se1.page.scss'],
})
export class Se1Page implements OnInit {

  // Inicializar controlador
  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  // Crear la funcion onClickSE11()
  onClickSE11(){
    console.log("Navegando a pagina SE11")
  }

  // Crear la funcion onClickSE2()
  onClickSE12(){
    console.log("Navegando a pagina SE12")
  }

  // Implementar metodo OnClick()
  onClick(){
    console.log("Click en boton Action Sheet");

    // Llamar al metodo de presentar el Action Sheet
    this.presentActionSheet();
  }

  // Metodo async Action Sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pagina SE-1',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
