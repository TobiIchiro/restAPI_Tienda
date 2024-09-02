import express from 'express'
import {nuevoCliente,
    mostrarClientes,
    mostrarCliente,
    actualizarCliente,
    eliminarCliente
} from '../controllers/clientesController.js'

const router = express.Router();

//Agregar cliente
router.post('/clientes', nuevoCliente)

//Mostrar todos los clientes
router.get('/clientes',mostrarClientes)

//Muestra un cliente
router.get('/clientes/:idCliente',mostrarCliente)

//Actualizar un cliente
router.put('/clientes/:idCliente',actualizarCliente)

//Actualiza parcialmente un cliente
router.delete('/clientes/:idCliente',eliminarCliente)

export default router