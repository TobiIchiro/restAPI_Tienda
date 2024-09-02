import express from 'express'
import routes from './routes/index.js'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis',{
    useNewUrlParser : true
})


const app = express();

app.listen(5000);