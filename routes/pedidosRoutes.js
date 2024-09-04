import express from 'express'
import {nuevoPedido,
    mostrarPedidos,
    mostrarPedido,
    actualizarPedido,
    eliminarPedido
} from '../controllers/pedidosController.js'

const router = express.Router();

router.post('/pedidos',nuevoPedido)
router.get('/pedidos',mostrarPedidos)
router.get('/pedidos/:idPedido',mostrarPedido)
router.put('/pedidos/:idPedido',actualizarPedido)
router.delete('/pedidos/:idPedido',eliminarPedido)

export default router




