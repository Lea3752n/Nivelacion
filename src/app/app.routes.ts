import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Productos } from './paginas/productos/productos';
import { Contacto } from './paginas/contacto/contacto';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';

export const routes: Routes = [

    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: Inicio},
    {path: 'prods', component: Productos},
    {path: 'contacto', component: Contacto},
    {path: 'ofertas', component: Ofertas},
    {path: 'carro', component: Carrito},
    {path: 'favoritos', component: Favoritos},
    {path: 'sesion', component: InicioSesion},
    {path: 'registro', component: Registro},
    {path: '**', redirectTo: 'inicio'}

];
