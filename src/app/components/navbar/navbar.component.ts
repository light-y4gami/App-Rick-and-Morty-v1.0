import { Component, } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeLink: string = 'home' // initially active

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
