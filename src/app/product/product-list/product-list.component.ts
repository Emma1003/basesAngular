import { Component } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Saludo de variable"

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":"4 puertas Familiar",
      "Year":"Febrero 3 2022",
      "Precio": 20000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "ImagenUrl":"https://img.remediosdigitales.com/b8cf4c/nissan-sentra-2024-mexico-prueba-video_3/450_1000.jpg"
    },
    {
      "productoId":2,
      "Modelo":'Audi',
      "Descripcion":"4 puertas Familiar",
      "Year":"Marzo 3 2023",
      "Precio": 30000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Small/audi/a4/mx/RT_PU_5849b39bb1d34925b228dcab323eed74.webp"
    },
    {
      "productoId":3,
      "Modelo":'Rio',
      "Descripcion":"4 puertas Familiar",
      "Year":"Agosto 3 2022",
      "Precio": 60000,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Small/kia/rio-hatchback/mx/RT_PU_65a3da48273f411c817051b7e986d6e8.webp"
    }

  ]

}