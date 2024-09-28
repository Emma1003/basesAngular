import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  resistenciaForm: FormGroup;
  valorResistencia: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;

  color1Hex: string = '' ;
  color2Hex: string = '';
  color3Hex: string = '';
  toleranciaHex: string = '';

  constructor() {
    this.resistenciaForm = new FormGroup({
      color1: new FormControl('', Validators.required),
      color2: new FormControl('', Validators.required),
      color3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required)
    });

    this.updateColors();
  }
  calcularResistencia() {
    const banda1 = parseInt(this.resistenciaForm.get('color1')?.value);
    const banda2 = parseInt(this.resistenciaForm.get('color2')?.value);
    
    const multiplicadores: { [key: number]: number } = {
      0: 1, 1: 10, 2: 100, 3: 1000, 4: 10000, 5: 100000, 6: 1000000, 7: 10000000, 8: 100000000, 9: 1000000000
    };
    
    const color3Value = this.resistenciaForm.get('color3')?.value;
    const multiplicador = multiplicadores[Number(color3Value) || 0];
    const tolerancia = parseFloat(this.resistenciaForm.get('tolerancia')?.value) / 100;
    console.log(banda1,banda2);
    this.valorResistencia = (banda1 * 10 + banda2) * multiplicador;
    this.valorMaximo = this.valorResistencia * (1 + tolerancia);
    this.valorMinimo = this.valorResistencia * (1 - tolerancia);
  }

  updateColors() {
    const colores = ['#000000', '#8B4513', '#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#EE82EE', '#808080', '#FFFFFF'];
    const tolerancias = { 5: '#FFD700', 10: '#C0C0C0' }; 

    const color1Value = this.resistenciaForm.get('color1')?.value;
    const color2Value = this.resistenciaForm.get('color2')?.value;
    const color3Value = this.resistenciaForm.get('color3')?.value;
    const toleranciaValue = this.resistenciaForm.get('tolerancia')?.value;
    console.log('Numero de tolerancia',toleranciaValue);
    this.color1Hex = colores[Number(color1Value)] || '#FFFFFF';
    this.color2Hex = colores[Number(color2Value)] || '#FFFFFF';
    this.color3Hex = colores[Number(color3Value)] || '#FFFFFF';
    if (toleranciaValue==10) {
      this.toleranciaHex = '#C0C0C0';
      console.log('Numero de tolerancia en hexa',this.toleranciaHex);
    }else if(toleranciaValue==5){
      this.toleranciaHex = '#FFD700';
      console.log('Numero de tolerancia en hexa',this.toleranciaHex);
    }else{
      this.toleranciaHex = '#FFFFFF';
    }
    
    
    // if (toleranciaValue && tolerancias.hasOwnProperty(Number(toleranciaValue))) {
    //   this.toleranciaHex = toleranciaValue[Number(toleranciaValue)];
    // } else {
    //   this.toleranciaHex = '#FFFFFF';
    // }
  }

  getTextColor(hexColor: string): string {
   // const rgb = parseInt(hexColor.substring(1), 16);
    // const r = (rgb >> 16) & 0xff;
    // const g = (rgb >> 8) & 0xff;
    // const b = (rgb >> 0) & 0xff;
    // const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    // return brightness > 125 ? 'black' : 'white';
     return 'white';
  }
}