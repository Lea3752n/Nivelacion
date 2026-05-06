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
      stock: 5,
      imagen: 'air-max-90.jpg',
      categoria: 'Deportes',
      disponible: true
    },
    {
      id: 2,
      nombre: 'Camiseta Nike',
      descripcion: 'Camiseta de algodón',
      precio: 5000,
      stock: 10,
      imagen: 'camiseta-nike.jpg',
      categoria: 'Ropa',
      disponible: true
    },
    {   
    id: 3,    
      nombre: 'Pantalón Adidas',
      descripcion: 'Pantalón deportivo',
      precio: 8000,
      stock: 3,
      imagen: 'pantalon-adidas.jpg',
      categoria: 'Ropa',
      disponible: false
    },   
    {
      id: 4,
      nombre: 'Gorra Puma',
      descripcion: 'Gorra de béisbol',
      precio: 3000,
      stock: 7,
      imagen: 'gorra-puma.jpg',
      categoria: 'Accesorios',
      disponible: true
    },
    {
      id: 5,
      nombre: 'Mochila Under Armour',
      descripcion: 'Mochila resistente al agua',
      precio: 12000,
      stock: 4,
      imagen: 'mochila-under-armour.jpg',
      categoria: 'Accesorios',
      disponible: true
    },
    {
      id: 6,
      nombre: 'Zapatillas Reebok',
      descripcion: 'Zapatillas para correr',
      precio: 22000,
      stock: 6,
      imagen: 'zapatillas-reebok.jpg',
      categoria: 'Deportes',
      disponible: false
    }
  ]

}
