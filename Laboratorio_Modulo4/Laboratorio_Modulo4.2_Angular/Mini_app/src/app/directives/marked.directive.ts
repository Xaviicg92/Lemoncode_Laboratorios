import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMarked]',
})
export class MarkedDirective {
  color: string;
  constructor(private el: ElementRef) {
    this.color = 'rgb(103,72,189)';
  }

  @HostListener('mouseenter')
  onMouseEnterEvent() {
    this.el.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeaveEvent() {
    this.el.nativeElement.style.color = '';
  }
}
