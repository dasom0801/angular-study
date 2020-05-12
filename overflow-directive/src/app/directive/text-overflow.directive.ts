import {AfterViewChecked, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTextOverflow]'
})
export class TextOverflowDirective implements AfterViewChecked {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewChecked() {
    const el = this.elementRef.nativeElement;
    const isOverflow = el.scrollWidth > el.clientWidth;
    if (isOverflow) {
      this.renderer.setStyle(el, 'background', 'yellow');
    }
  }
}
