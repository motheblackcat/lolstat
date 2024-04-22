import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  menus = [
    { link: '/home', icon: 'home-outline' },
    { link: '/apex-stats', icon: 'basketball-outline' },
    { link: '/player', icon: 'person-outline' }
  ];

  constructor() { }
}
