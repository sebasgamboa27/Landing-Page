import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(this.el.nativeElement);
  }
}
