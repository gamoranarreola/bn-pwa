import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
