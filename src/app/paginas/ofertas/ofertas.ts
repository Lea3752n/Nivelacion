import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Prods } from '../../servicios/prods';
import { Carro } from '../../servicios/carrito';
import { Favs } from '../../servicios/favs';


@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {

  prodServ = inject(Prods); 
  carroServ = inject(Carro);
  favsServ = inject(Favs);

  // Variable para almacenar la lista de productos en oferta
  productosOferta: Array<any> = this.prodServ.tomarProductos().filter(producto => producto.oferta);

  // Agregar un producto al carrito
  agregarAlCarrito(producto: any) {
    this.carroServ.agregarProducto(producto);
  }

  // Agregar un producto a favoritos
  agregarFavorito(producto: any) {
    this.favsServ.agregarProducto(producto);
  } 
}
