import express from 'express'
import {nuevoPedido,
    mostrarPedidos,
    mostrarPedido
} from '../controllers/pedidosController.js'

const router = express.Router();

router.post('/pedidos',nuevoPedido)
router.get('/pedidos',mostrarPedidos)
router.get('/pedidos/:idPedido',mostrarPedido)

export default router




