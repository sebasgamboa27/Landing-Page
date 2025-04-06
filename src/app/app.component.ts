import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.initScrollAnimations();
  }

  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });
  }

  openMap() {
    window.open('https://www.google.pl/maps/place/Parque+E%C3%B3lico+Fila+de+Mogote/@10.6967431,-85.252715,17z/data=!3m1!4b1!4m6!3m5!1s0x8f755d520a9c0a41:0x917f9cf9f09ba5a!8m2!3d10.6967431!4d-85.2501401!16s%2Fg%2F11rv1kmd5k?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D', '_blank');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Lógica adicional de scroll si es necesaria
  }
}