import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import clientesRoutes from './routes/clientesRoutes.js'
import productosRoutes from './routes/productosRoutes.js'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.use('/',clientesRoutes)
app.use('/',productosRoutes)

app.listen(5000);