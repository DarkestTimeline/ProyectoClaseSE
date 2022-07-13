import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ab',
  templateUrl: './ab.page.html',
  styleUrls: ['./ab.page.scss'],
})
export class AbPage implements OnInit {
  isVisible2 = false;
  isVisible3 = false;

  constructor() { }

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

}
