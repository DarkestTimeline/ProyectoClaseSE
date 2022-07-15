import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ab',
  templateUrl: './ab.page.html',
  styleUrls: ['./ab.page.scss'],
})
export class AbPage implements OnInit {
  isVisible2 = false;
  isVisible3 = false;
  isVisible4 = false;
  isVisible5 = false;
  isVisible6 = false;
  isVisible7 = false;
  isVisible8 = false;
  isVisible9 = false;
  isVisible10 = false;
  isVisible11 = false;
  isVisible12 = false;
  isVisible13 = false;

  constructor(public alertCTRL: AlertController) { }

  ngOnInit() {
  }

  onClickMostrar2(){
    this.isVisible2 = true;
    this.isVisible3 = false;
  }

  onClickMostrar3(){
    this.isVisible3 = true;
    this.isVisible2 = false;
  }

  onClickNo2(){
    this.isVisible3 = true;
  }

  onClickNo3(){
    this.isVisible4 = true;
  }

  onClickMostrar4(){
    this.isVisible4 = true;
  }

  onClickTI(){
    this.isVisible5 = true;
  }

  onClickTD(){
    this.isVisible6 = true;
  }

  onClickNo56(){
    this.isVisible7 = true;
  }

  onClickRam(){
    this.isVisible8 = true;
  }

  onClickBios(){
    this.isVisible9 = true;
  }

  onClickNo9(){
    this.isVisible10 = true;
  }

  onClickSi9(){
    this.isVisible11 = true;
  }

  onClickSi10(){
    this.isVisible11 = true;
  }

  onClickNo11(){
    this.isVisible12 = true;
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

  async presentAlertSorry() {
    const alert = await this.alertCTRL.create({
      cssClass: 'my-custom-class',
      header: 'Lo sentimos :(',
      message: 'Desafortunadamente no hemos podido diagnosticar el problema - por favor abócate al centro técnico mas cercano.',
      buttons: [
        {
          text: 'Okay :(',
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
