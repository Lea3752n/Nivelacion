import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Favs } from '../../servicios/favs'; 

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {

  favsServ = inject(Favs);

  // Variable para almacenar la lista de productos favoritos
  favoritos: Array<any> = this.favsServ.tomarProductos();
}
