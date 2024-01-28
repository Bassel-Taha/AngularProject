import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[LightHouse]',
  standalone: true
})
export class LightHouseDirective {

  constructor(private elmref : ElementRef)
  {
    elmref.nativeElement.style.border = "3px solid cyan"
  }

 @HostListener('mouseover') OnMouseHover()
  {
    this.elmref.nativeElement.style.border = "5px solid red "
  }

 @HostListener('mouseout')  OnMouseRemoved()
  {
    this.elmref.nativeElement.style.border = "3px solid cyan"
  }
}
