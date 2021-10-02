import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format!: string;

  // eslint-disable-next-line no-unused-vars
  constructor(private el: ElementRef) {  }

  @HostListener('blur') onBlur(){
    const value:string = this.el.nativeElement.value;
    switch(this.format){
      case 'lowercase':{
        this.el.nativeElement.value = value.toLowerCase();
        break;
      }
      case 'uppercase':{
        this.el.nativeElement.value = value.toUpperCase();
        break;
      }
      default:
    }
  }
}
