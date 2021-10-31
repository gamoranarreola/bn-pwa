import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

  isAuthenticated: boolean;

  constructor(
    private menu: MenuController,
    private authService: AuthService
  ) { }

  close() {
    this.menu.close();
  }

  logout() {
    this.menu.close();
    this.authService.logout();
  }

  test() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
