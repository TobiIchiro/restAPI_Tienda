import express from 'express'
import {nuevoProducto,
    mostrarProductos,
    mostrarProducto,
    actualizarProducto,
    eliminarProducto
} from '../controllers/productosController.js'
import subirArchivo from '../middleware/subirImagen.js';

const router = express.Router();

//Agregar producto
router.post('/productos',
    subirArchivo,
    nuevoProducto)

//Mostrar todos los productos
router.get('/productos',mostrarProductos)

//Muestra un producto
router.get('/productos/:idProducto',mostrarProducto)

//Actualizar un producto
router.put('/productos/:idProducto',
    subirArchivo,
    actualizarProducto)

//Actualiza parcialmente un producto
router.delete('/productos/:idProducto',eliminarProducto)

export default router