
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRepohighlight]'
})
export class RepohighlightDirective {

  constructor(private el:ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = 'grey';
  }

}
