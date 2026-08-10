import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Prods } from '../../servicios/prods';
import { Carro } from '../../servicios/carrito';
import { Favs } from '../../servicios/favs';


@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  prodServ = inject(Prods);
  carroServ = inject(Carro);
  favsServ = inject(Favs);

  // Variable para almacenar la lista de productos
  productos: Array<any> = this.prodServ.tomarProductos();

  // Agregar un producto al carrito
  agregarAlCarrito(producto: any) {
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
    this.carroServ.agregarProducto(producto);
  }

  // Agregar un producto a favoritos
  agregarFavorito(producto: any) {
    this.favsServ.agregarProducto(producto);
  }

}
