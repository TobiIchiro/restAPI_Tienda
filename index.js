import express from 'express'
import clientesRoutes from './routes/clientesRoutes.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.use('/',clientesRoutes)

app.listen(5000);