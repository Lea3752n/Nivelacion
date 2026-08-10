import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
<<<<<<< HEAD
export class Carro {
=======
export class Carrito {
>>>>>>> ad4b14605c59deb741ba20463ef4e547f2a85a3b
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

<<<<<<< HEAD
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
=======
  // Calcular el total de la compra
  calcularTotal(): number {
    return this.prodCarro.reduce((total, producto) => total + producto.precioOferta, 0);
>>>>>>> ad4b14605c59deb741ba20463ef4e547f2a85a3b
  }

  // Limpiar el carrito
  vaciar() {
    this.prodCarro = [];
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> ad4b14605c59deb741ba20463ef4e547f2a85a3b
