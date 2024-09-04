import multer from "multer";
import path from "path";
import {generateId} from '../helpers/index.js'

const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './public/uploads')
        },
        filename:  function(req, file, cb){
            cb(null, generateId() + path.extname(file.originalname))
        }
    })

const fileFilter = function(req, file, cb) {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null,true)
    }
    else {
        cb(new Error('Formato no válido'))
    }
}

const upload = multer({storage, fileFilter}).single('imagen');

const subirArchivo = (req,res,next) => {
    upload(req, res, function(error) {
        if(error) {
            res.json({mensaje: error})
        }
        return next();
    })
}

export default subirArchivo