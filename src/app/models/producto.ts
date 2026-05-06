export interface Producto {
id: number;
nombre: string;
descripcion: string;
precio: number;
stock: number;
imagen: string;
categoria: string;
disponible: boolean; // Propiedad opcional
}
// Crear un objeto que cumple la interfaz
const p: Producto = {
id: 1,
nombre: 'Air Max 90',
descripcion: 'Zapatillas deportivas',
precio: 25000,
stock: 5,
imagen: 'air-max-90.jpg',
categoria: 'Deportes',
disponible: true
};
