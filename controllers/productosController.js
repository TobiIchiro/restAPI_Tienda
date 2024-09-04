import Productos from '../models/Productos.js'

const nuevoProducto = async(req, res, next) => {
    const Producto = new Productos(req.body)
    try {
        if(req.file.filename){
            Producto.imagen = req.file.filename
        }
        await Producto.save()
        res.json({mensaje : 'Se agregó un nuevo producto'})
    } catch (error) {
        console.log(error)
        next();
    }
}

const mostrarProductos = async(req, res, next) => {
    try {
        const productos = await Productos.find({});
        res.json(productos)
    } catch (error) {
        console.log(error)
        next();
    }
}

const mostrarProducto = async(req, res, next) => {
    try {
        const producto = await Productos.findById(req.params.idProducto)
        if(!producto) {
            res.json({mensaje: 'Este producto no existe'});
            next();
        }
        res.json(producto)
    } catch (error) {
        console.log(error)
        next();
        
    }
}

const actualizarProducto = async(req, res, next) => {
    try {
        const producto = await Productos.findByIdAndUpdate({_id : req.params.idProducto}, 
            req.body, {
                new: true
            })
        res.json(producto)
    }
    catch (error) {
        console.log(error)
        next();
    }
}

const eliminarProducto = async (req, res, next) => {
    try {
        await Productos.findOneAndDelete({_id : req.params.idProducto});
        res.json({mensaje : 'El producto se ha eliminado'})
    } catch (error) {
        console.log(error)
        next();
    }
}

export {
    nuevoProducto,
    mostrarProductos,
    mostrarProducto,
    actualizarProducto,
    eliminarProducto
}