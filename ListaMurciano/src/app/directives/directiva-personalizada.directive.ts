import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaPersonalizada]'
})
export class DirectivaPersonalizadaDirective {

  constructor(
    private renderer: Renderer2, //Crear propiedades que solo pueden accederse desde esta clase. Para renderizar contenido
    private elementRef: ElementRef //Obtener la referencia al elemento HTML 
  ) { 
    renderer.setStyle(elementRef.nativeElement, 'background-color', 'grey');
    renderer.setStyle(elementRef.nativeElement, 'border-radius', '20px');
  }

}
