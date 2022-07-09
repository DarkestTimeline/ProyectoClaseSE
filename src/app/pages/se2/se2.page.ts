import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-se2',
  templateUrl: './se2.page.html',
  styleUrls: ['./se2.page.scss'],
})
export class Se2Page implements OnInit {

  // Inicializar el controlador de Alert
  constructor(public alertCTRL: AlertController) { }

  ngOnInit() {
  }

  onClickSE12(){
    console.log("Navegando a pagina SE12")
  }

  // Metoddo de Ion-Alert
  async presentAlert() {
    const alert = await this.alertCTRL.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  // Metodo de Alert Multiple Buttons
  async presentAlertMultipleButtons() {
    const alert = await this.alertCTRL.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertCTRL.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
