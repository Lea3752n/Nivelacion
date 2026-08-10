export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    precioOferta?: number; // Propiedad opcional
    stock: number;
    imagen: string;
<<<<<<< HEAD
    imagenes?: string[]; // Propiedad opcional para un array de imágenes
=======
    imagen2?: string;
    imagen3?: string;
    imagen4?: string;
    imagen5?: string;
>>>>>>> ad4b14605c59deb741ba20463ef4e547f2a85a3b
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
<<<<<<< HEAD
    imagenes: ['assets/Vaso1_SB1.png', 'assets/Vaso2_SB1.png', 'assets/Vaso3_SB1.png'],
=======
>>>>>>> ad4b14605c59deb741ba20463ef4e547f2a85a3b
    oferta: true,
    disponible: true
};
