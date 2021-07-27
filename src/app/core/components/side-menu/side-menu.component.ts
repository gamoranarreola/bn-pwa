import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../../core/guards/auth.guard';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  isAuth = AuthGuard;
  constructor() { }

  ngOnInit() {

  }

}
