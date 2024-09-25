 import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  cantidadBoletos: number = 0;
  usaTarjeta: boolean = false;
  precioFinal: number = 0;

  // Precio fijo del boleto
  precioBase: number = 120;

  calcularPrecio() {
    let descuentoCantidad = 0;
    let descuentoTarjeta = 0;

    // Aplicar descuentos por cantidad de boletos
    if (this.cantidadBoletos > 6) {
      descuentoCantidad = 0.15; // 15% de descuento si compra más de 6 boletos
    } else if (this.cantidadBoletos >= 3 && this.cantidadBoletos <= 5) {
      descuentoCantidad = 0.10; // 10% de descuento si compra entre 3 y 5 boletos
    }

    // Calcular el precio con descuento por cantidad
    let precioTotal = this.cantidadBoletos * this.precioBase;
    let precioConDescuento = precioTotal * (1 - descuentoCantidad);

    // Aplicar descuento por tarjeta Cinéco
    if (this.usaTarjeta) {
      descuentoTarjeta = 0.10; // 10% de descuento adicional
      precioConDescuento *= (1 - descuentoTarjeta);
    }

    // Asignar el precio final
    this.precioFinal = precioConDescuento;
  }
} 