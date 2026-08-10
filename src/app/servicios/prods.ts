import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Producto } from '../models/producto';
=======
>>>>>>> ad4b14605c59deb741ba20463ef4e547f2a85a3b

@Injectable({
  providedIn: 'root',
})
export class Prods {
<<<<<<< HEAD
  /* Lista de productos */
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Air Max 90',
      descripcion: 'Zapatillas deportivas',
      precio: 25000,
      precioOferta: 20000,
      stock: 5,
      imagen: 'assets/Vaso1_SB.png',
      imagenes: ['assets/Vaso1_SB.png', 'assets/Vaso1_SB1.png', 'assets/Vaso1_SB2.png', 'assets/Vaso1_SB3.png'],
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
      imagen: 'assets/Funko1.1.png',
      imagenes: ['assets/Funko1.1.png', 'assets/Funko1.2.png', 'assets/Funko1.3.png'],
      oferta: false,
      disponible: true
    },
    {   
    id: 3,    
      nombre: 'Pantalón Adidas',
      descripcion: 'Pantalón deportivo',
      precio: 8000,
      precioOferta: 6000,
      stock: 3,
      imagen: 'assets/t.png',
      imagenes: ['assets/Tamagochi.png', 'assets/Tamagochi1.png', 'assets/Tamagochi2.png','assets/Tamagochi3.png'],
      oferta: false,
      disponible: true
    },   
    {
      id: 4,
      nombre: 'Gorra Puma',
      descripcion: 'Gorra de béisbol',
      precio: 3000,
      precioOferta: 2500,
      stock: 7,
      imagen: 'assets/Vaso2_SB1.png',
      imagenes: ['assets/Vaso2_SB1.png', 'assets/Vaso2_SB2.png', 'assets/Vaso2_SB3.png','assets/Vaso2_SB4.png','assets/Vaso2_SB5.png'],
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
      imagen: 'assets/Taza1_SB.png',
      imagenes: ['assets/Taza1_SB.png', 'assets/Taza1_SB1.png', 'assets/Taza1_SB2.png','assets/Taza1_SB3.png','assets/Taza1_SB4.png','assets/Taza1_SB5.png'],
      oferta: false,
      disponible: true
    },
    {
      id: 6,
      nombre: 'Zapatillas Reebok',
      descripcion: 'Zapatillas para correr',
      precio: 22000,
      precioOferta: 18000,
      stock: 6,
      imagen: 'assets/Funko2.1.png',
      imagenes: ['assets/Funko2.1.png', 'assets/Funko2.2.png', 'assets/Funko2.3.png'],
      oferta: true,
      disponible: true
    },
    {
      id: 7,
      nombre: 'Zapatillas Reebok',
      descripcion: 'Zapatillas para correr',
      precio: 22000,
      precioOferta: 18000,
      stock: 6,
      imagen: 'assets/Tazones.png',
      imagenes: ['assets/Tazones1.png', 'assets/Tazones2.png', 'assets/Tazones3.png'],
      oferta: true,
      disponible: true
    },
    {
      id: 8,
      nombre: 'Zapatillas Reebok',
      descripcion: 'Zapatillas para correr',
      precio: 22000,
      precioOferta: 18000,
      stock: 6,
      imagen: 'zapatillas-reebok.jpg',
      imagenes: ['zapatillas-reebok.jpg', 'zapatillas-reebok-2.jpg', 'zapatillas-reebok-3.jpg'],
      oferta: true,
      disponible: true
    },
    {
      id: 9,
      nombre: 'Zapatillas Reebok',
      descripcion: 'Zapatillas para correr',
      precio: 22000,
      precioOferta: 18000,
      stock: 6,
      imagen: 'zapatillas-reebok.jpg',
      imagenes: ['zapatillas-reebok.jpg', 'zapatillas-reebok-2.jpg', 'zapatillas-reebok-3.jpg'],
      oferta: true,
      disponible: true
    },
    {
      id: 10,
      nombre: 'Zapatillas Reebok',
      descripcion: 'Zapatillas para correr',
      precio: 22000,
      precioOferta: 18000,
      stock: 6,
      imagen: 'zapatillas-reebok.jpg',
      imagenes: ['zapatillas-reebok.jpg', 'zapatillas-reebok-2.jpg', 'zapatillas-reebok-3.jpg'],
      oferta: false,
      disponible: true
    },
    {
      id: 11,
      nombre: 'Zapatillas Reebok',
      descripcion: 'Zapatillas para correr',
      precio: 22000,
      precioOferta: 18000,
      stock: 6,
      imagen: 'zapatillas-reebok.jpg',
      imagenes: ['zapatillas-reebok.jpg', 'zapatillas-reebok-2.jpg', 'zapatillas-reebok-3.jpg'],
      oferta: true,
      disponible: true
    },
    {
      id: 12,
      nombre: 'Zapatillas Reebok',
      descripcion: 'Zapatillas para correr',
      precio: 22000,
      precioOferta: 18000,
      stock: 6,
      imagen: 'zapatillas-reebok.jpg',
      imagenes: ['zapatillas-reebok.jpg', 'zapatillas-reebok-2.jpg', 'zapatillas-reebok-3.jpg'],
      oferta: true,
      disponible: true
    },
  ]

  /* Método para obtener la lista de productos */
  tomarProductos() {
    return this.productos;
  }

  buscarProducto(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }


=======
  
>>>>>>> ad4b14605c59deb741ba20463ef4e547f2a85a3b
}
