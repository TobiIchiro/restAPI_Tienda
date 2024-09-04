import express from 'express'
import {nuevoPedido,
    mostrarPedidos
} from '../controllers/pedidosController.js'

const router = express.Router();

router.post('/pedidos',nuevoPedido)
router.get('/pedidos',mostrarPedidos)

export default router




