import Clientes from '../models/Clientes.js'

const nuevoCliente = async(req, res, next) => {
    console.log(req.body);
    const Cliente = new Clientes(req.body)
    try {
        await Cliente.save()
        res.json({mensaje : 'Se agregó un nuevo cliente'})
    } catch (error) {
        console.log(error)
        next();
    }
}

const mostrarClientes = async(req, res, next) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes)
    } catch (error) {
        console.log(error)
        next();
    }
}

const mostrarCliente = async(req, res, next) => {
    try {
        const cliente = await Clientes.findById(req.params.idCliente)
        if(!cliente) {
            res.json({mensaje: 'Este cliente no existe'});
            next();
        }
        res.json(cliente)
    } catch (error) {
        console.log(error)
        next();
        
    }
}

const actualizarCliente = async(req, res, next) => {
    try {
        const cliente = await Clientes.findByIdAndUpdate({_id : req.params.idCliente}, 
            req.body, {
                new: true
            })
        res.json(cliente)
    }
    catch (error) {
        console.log(error)
        next();
    }
}

const eliminarCliente = async (req, res, next) => {
    try {
        await Clientes.findOneAndDelete({_id : req.params.idCliente});
        res.json({mensaje : 'El cliente se ha eliminado'})
    } catch (error) {
        console.log(error)
        next();
    }
}

export {
    nuevoCliente,
    mostrarClientes,
    mostrarCliente,
    actualizarCliente,
    eliminarCliente
}