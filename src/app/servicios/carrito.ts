import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Carro {
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

  // Aumentar la cantidad de un producto en el carrito
  aumentarCantidad(producto: any) {
    const item = this.prodCarro.find(p => p.id === producto.id);
    if (!item) {
      return;
    }
    item.cantidad = (item.cantidad ?? 1) + 1;
  }

  // Disminuir la cantidad de un producto en el carrito
  disminuirCantidad(producto: any) {
    const item = this.prodCarro.find(p => p.id === producto.id);
    if (!item) {
      return;
    }

    item.cantidad = (item.cantidad ?? 1) - 1;
    if (item.cantidad <= 0) {
      this.eliminar(item.id);
    }
  }

  // Calcular el total de la compra
  calcularTotal(): number {
    return this.prodCarro.reduce((total, producto) => total + producto.precioOferta * (producto.cantidad ?? 1), 0);
  }

  // Limpiar el carrito
  vaciar() {
    this.prodCarro = [];
  }
}