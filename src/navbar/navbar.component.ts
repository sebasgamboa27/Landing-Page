import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed = true;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
    if (!this.isCollapsed) {
      this.toggleMenu();
    }
  }
}