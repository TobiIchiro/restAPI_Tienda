import express from 'express'
import routes from './routes/index.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.use('/',routes)

app.listen(5000);