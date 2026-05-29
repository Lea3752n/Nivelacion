import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Carrito {
  // Array para almacenar los productos del carrito
  private prodCarro: any[] = [];

  // Agregar un producto al carrito
  agregarProducto(producto: any) {
    this.prodCarro.push(producto);
  }

  // Obtener todos los productos del carrito
  tomarProductos() {
    return this.prodCarro;
  }

  // Eliminar un producto por su id
  eliminar(id: number) {
    this.prodCarro = this.prodCarro.filter(p => p.id !== id);
  }

  // Calcular el total de la compra
  calcularTotal(): number {
    return this.prodCarro.reduce((total, producto) => total + producto.precioOferta, 0);
  }

  // Limpiar el carrito
  vaciar() {
    this.prodCarro = [];
  }
}
