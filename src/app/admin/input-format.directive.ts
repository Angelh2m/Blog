import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  // USE THIS IN THE HTML
  selector: '[appInputFormat]'
})

export class InputFormatDirective {

  @Input('format') format;

  constructor( private el: ElementRef) { }


  // Decorator + NAME + event listener
  // @HostListener('focus') onFocus() {
  //   console.log('on Focus');
  // }

  @HostListener('blur') onBlur() {
    // console.log('on Blur');
    // nativeElement gets access to the input value
    let value: string = this.el.nativeElement.value;

    this.el.nativeElement.value = value.toUpperCase();
  }



}
