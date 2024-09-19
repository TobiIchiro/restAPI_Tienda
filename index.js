import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import cors from 'cors'

import clientesRoutes from './routes/clientesRoutes.js'
import productosRoutes from './routes/productosRoutes.js'
import pedidosRoutes from './routes/pedidosRoutes.js'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.use(cors())

app.use('/',clientesRoutes)
app.use('/',productosRoutes)
app.use('/',pedidosRoutes)

app.use(express.static('public/uploads'));

app.listen(5000);