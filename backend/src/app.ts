import express from 'express'

import mongoose from 'mongoose'

import cors from 'cors'

//import {router} from './routes'

import {Api} from './controllers/Control'

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(cors())


// app.use('/api', router)
app.use('/api', Api)

// Colocar isso em uma variavel de ambiente .env
mongoose.connect('mongodb+srv://gabrielVjfl:60818181@cluster0-lqnvw.gcp.mongodb.net/typescript', {useNewUrlParser: true, useFindAndModify: true})
.then(response => {
    console.log('Conectado com sucesso')
}).catch(err => {
    console.log('Ocorreu um erro')
})

export {app}


