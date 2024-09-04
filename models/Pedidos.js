import mongoose from "mongoose";
import Productos from "./Productos";

const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
    cliente: {
        type: Schema.ObjectId,
        ref : 'Clientes'
    },
    productos: [{
        producto: {
            type: Schema.ObjectId,
            ref: 'Productos'
        },
        cantidad: Number
    }],
    total: {
        type: Number
    }
})

export default mongoose.model('Pedidos',pedidosSchema)