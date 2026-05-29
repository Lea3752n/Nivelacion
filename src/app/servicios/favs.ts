import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Favs {
  // Array para almacenar los productos favoritos
  private prodFavs: any[] = [];
  
  // Agregar un producto a favoritos
  agregarFavorito(producto: any) {
    this.prodFavs.push(producto);
  }
}
