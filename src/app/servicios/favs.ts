import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Favs {
  // Array para almacenar los productos favoritos
  private prodFavs: any[] = [];
<<<<<<< HEAD

  // Agregar un producto a favoritos
  agregarProducto(producto: any) {
    this.prodFavs.push(producto);
  }

  // Obtener todos los productos favoritos
  tomarProductos() {
    return this.prodFavs;
  }

  // Eliminar un producto por su id
  eliminar(id: number) {
    this.prodFavs = this.prodFavs.filter(p => p.id !== id);
  }

  // Limpiar los favoritos
  vaciar() {
    this.prodFavs = [];
  } 
=======
  
  // Agregar un producto a favoritos
  agregarFavorito(producto: any) {
    this.prodFavs.push(producto);
  }
>>>>>>> ad4b14605c59deb741ba20463ef4e547f2a85a3b
}
