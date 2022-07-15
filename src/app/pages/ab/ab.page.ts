import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ab',
  templateUrl: './ab.page.html',
  styleUrls: ['./ab.page.scss'],
})
export class AbPage implements OnInit {
  isVisible21 = false;
  isVisible22 = false;

  constructor(public alertCTRL: AlertController) { }

  ngOnInit() {
  }

  onClickMostrar2(){
    this.isVisible21 = true;
    this.isVisible22 = false;
  }

  onClickMostrar3(){
    this.isVisible22 = true;
    this.isVisible21 = false;
  }

  async presentAlertConfirm() {
    const alert = await this.alertCTRL.create({
      cssClass: 'my-custom-class',
      header: 'Confirmacion',
      message: 'Has resuelto tu problema?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            window.location.href = '/principal';
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
