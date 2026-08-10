import { Component, EventEmitter, Output } from '@angular/core';
import { inject } from '@angular/core';
import { Carro } from '../../servicios/carrito';  

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {

  carroServ = inject(Carro);

  // Variable para almacenar la lista de productos en el carrito
  carrito: Array<any> = this.carroServ.tomarProductos();

  private actualizarCarrito() {
    this.carrito = this.carroServ.tomarProductos();
  }

  // Método para eliminar un producto del carrito
  eliminarDelCarrito(producto: any) {
    this.carroServ.eliminar(producto.id ?? producto);
    this.carroServ.disminuirCantidad(producto.id);
    this.actualizarCarrito();
  }

  // Aumentar la cantidad de un producto en el carrito
  aumentarCantidad(producto: any) {
    this.carroServ.aumentarCantidad(producto);
    this.actualizarCarrito();
  }

  // Disminuir la cantidad de un producto en el carrito
  disminuirCantidad(producto: any) {
    this.carroServ.disminuirCantidad(producto);
    this.actualizarCarrito();
  }

  obtenerTotal(): number {
    return this.carroServ.calcularTotal();
  }

  obtenerTotalProductos(): number {
    return this.carrito.reduce((count, item) => count + (item.cantidad ?? 1), 0);
  }

  vaciarCarrito() {
    this.carroServ.vaciar();
    this.actualizarCarrito();
  }

  finalizarCompra() {
    return alert(`Compra finalizada. Total: $${this.obtenerTotal()}. Gracias por su compra.`);
  }

}
