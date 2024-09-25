import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  cinepolisForm: FormGroup;
  precioFinal: number = 0;
  mensajeError: string = '';

  constructor() {
    this.cinepolisForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cantidadPersonas: new FormControl('', [Validators.required, Validators.min(1), Validators.max(7)]),
      cantidadBoletos: new FormControl('', [Validators.required, Validators.min(1), Validators.max(7)]),
      tarjetaCineco: new FormControl(false)
    });
  }


  calcularPrecio() {
    const precioBoleto = 12; // Precio de un boleto en pesos
    let cantidadBoletos = this.cinepolisForm.get('cantidadBoletos')?.value;
    let cantidadPersonas = this.cinepolisForm.get('cantidadPersonas')?.value;
    let usaTarjeta = this.cinepolisForm.get('tarjetaCineco')?.value;
    
    if (cantidadBoletos > (cantidadPersonas * 7)) {
      this.mensajeError = 'No puedes comprar más de 7 boletos por persona';
      this.precioFinal = 0;
      return;
    }
    
    this.mensajeError = ''; 
    let total = cantidadBoletos * precioBoleto;

    
    if (cantidadBoletos > 5) {
      total *= 0.85; 
    } else if (cantidadBoletos >= 3 && cantidadBoletos <=5 ) {
      total *= 0.90; 
    }
  

    
    if (usaTarjeta) {
      total *= 0.90;
    }

    this.precioFinal = parseFloat(total.toFixed(2));
  }
}