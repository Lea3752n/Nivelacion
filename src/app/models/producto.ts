export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    precioOferta?: number; // Propiedad opcional
    stock: number;
    imagen: string;
    imagenes?: string[]; // Propiedad opcional para un array de imágenes
    oferta?: boolean; // Propiedad opcional
    disponible?: boolean; // Propiedad opcional
}
// Crear un objeto que cumple la interfaz
const p: Producto = {
    id: 1,
    nombre: 'Air Max 90',
    descripcion: 'Zapatillas deportivas',
    precio: 25000,
    precioOferta: 20000,
    stock: 5,
    imagen: 'assets/Vaso1_SB1.png',
    imagenes: ['assets/Vaso1_SB1.png', 'assets/Vaso2_SB1.png', 'assets/Vaso3_SB1.png'],
    oferta: true,
    disponible: true
};
