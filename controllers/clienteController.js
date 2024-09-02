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

export {
    nuevoCliente
}