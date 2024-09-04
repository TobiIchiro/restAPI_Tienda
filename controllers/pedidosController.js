
import Pedidos from "../models/Pedidos.js";
import Productos from "../models/Productos.js";
import Clientes from "../models/Clientes.js";

const nuevoPedido = async (req, res, next) => {
    const pedido = new Pedidos(req.body)
    try {
        await pedido.save()
        res.json({mensaje : 'se agregó un pedido'})
    } catch (error) {
        console.log(error)
        next();
    }
    
}
const mostrarPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        })
        res.json(pedidos)
    } catch (error) {
        console.log(error)
        next();
    }
}

const mostrarPedido = async (req,res, next) => {
    try {
        const pedido = await Pedidos.findById(req.params.idPedido).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Productos'
        })
        res.json(pedido)
    } catch (error) {
        console.log(error)
    }
}

export {
    nuevoPedido,
    mostrarPedidos,
    mostrarPedido
}