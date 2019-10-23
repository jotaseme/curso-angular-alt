import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[altDestacar]'
})
export class DestacarDirective {
  @Input() altDestacar: string;
  constructor(private element: ElementRef) {
    this.element.nativeElement.innerHTML += '{{IMP}}';
  }

  @HostListener('click') onClick() {
      this.element.nativeElement.classList.toggle('destacar');
  }
}
