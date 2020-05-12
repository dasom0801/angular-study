import {
  AfterViewChecked,
  ComponentFactory, ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef, HostListener, OnDestroy,
  ViewContainerRef
} from '@angular/core';
import { TooltipComponent } from '../component/tooltip/tooltip.component';

@Directive({
  selector: '[appTextOverflowTooltip]'
})
export class TextOverflowTooltipDirective implements AfterViewChecked, OnDestroy {
  componentRef: ComponentRef<TooltipComponent>;
  componentFactory: ComponentFactory<TooltipComponent>;
  isOverflow: boolean;
  text: string;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngAfterViewChecked() {
    const el = this.elementRef.nativeElement;
    this.isOverflow = el.scrollWidth > el.clientWidth;
    if (this.isOverflow) {
      this.text = el.innerText;
      this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
    }
  }

  ngOnDestroy() {
    this.componentRef?.destroy();
  }

  @HostListener('mouseover') onMouseOver() {
    if (this.isOverflow) {
      this.componentRef = this.viewContainerRef.createComponent(this.componentFactory);
      this.componentRef.instance.text = this.text;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.componentRef) {
      this.viewContainerRef.clear();
    }
  }
}
