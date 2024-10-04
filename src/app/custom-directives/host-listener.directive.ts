import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor( private element: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.render.addClass(this.element.nativeElement, 'highlight-product')
  }

  @HostListener('mouseleave') onMouseOut(){
    this.render.removeClass(this.element.nativeElement, 'highlight-product')
    
  }

}
