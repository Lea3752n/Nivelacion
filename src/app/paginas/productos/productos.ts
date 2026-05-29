import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Air Max 90',
      descripcion: 'Zapatillas deportivas',
      precio: 25000,
      precioOferta: 20000,
      stock: 5,
      imagen: 'assets/Vaso1_SB1.png',
      imagen2: 'assets/Vaso1_SB2.png',
      imagen3: 'assets/Vaso1_SB3.png',
      oferta: true,
      disponible: true
    },
    {
      id: 2,
      nombre: 'Camiseta Nike',
      descripcion: 'Camiseta de algodón',
      precio: 5000,
      precioOferta: 4000,
      stock: 10,
      imagen: 'camiseta-nike.jpg',
      oferta: true,
      disponible: true
    },
    {   
    id: 3,    
      nombre: 'Pantalón Adidas',
      descripcion: 'Pantalón deportivo',
      precio: 8000,
      precioOferta: 6000,
      stock: 3,
      imagen: 'pantalon-adidas.jpg',
      oferta: true,
      disponible: true
    },   
    {
      id: 4,
      nombre: 'Gorra Puma',
      descripcion: 'Gorra de béisbol',
      precio: 3000,
      precioOferta: 2500,
      stock: 7,
      imagen: 'gorra-puma.jpg',
      oferta: true,
      disponible: true
    },
    {
      id: 5,
      nombre: 'Mochila Under Armour',
      descripcion: 'Mochila resistente al agua',
      precio: 12000,
      precioOferta: 10000,  
      stock: 4,
      imagen: 'mochila-under-armour.jpg',
      oferta: true,
      disponible: true
    },
    {
      id: 6,
      nombre: 'Zapatillas Reebok',
      descripcion: 'Zapatillas para correr',
      precio: 22000,
      precioOferta: 18000,
      stock: 6,
      imagen: 'zapatillas-reebok.jpg',
      oferta: true,
      disponible: true
    }
  ]

}
