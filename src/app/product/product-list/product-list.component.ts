import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl:`./product-list.component.html`,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Ese mi perro";

  imagenWidth:number=50;
  imagenMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }


  productos:any[]=[
{
    "productoId":1,
    "Modelo":'Sentra',
    "Descripcion":"4 puertas  familiar",
    "Year":"febrero 3 2022",
    "Precio":20000,
    "Marca":"NISSAN",
    "Color":"Morado",
    "imagenUrl":"https://th.bing.com/th/id/OIP.H0uBxOABBIi6V7hY8AHOygHaED?w=308&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
  },
  {
    "productoId":2,
    "Modelo":'A4',
    "Descripcion":"2 puertas",
    "Year":"marzo 3 2023",
    "Precio":35000,
    "Marca":"AUDI",
    "Color":"blanco",
    "ImagenUrl":""
  },
  {
    "productoId":3,
    "Modelo":'Rio',
    "Descripcion":"4 puertas familiar",
    "Year":"Agosto 3 2022",
    "Precio":6000,
    "Marca":"KIA",
    "Color":"Azul",
    "ImagenUrl":""
  }
  ]



}
