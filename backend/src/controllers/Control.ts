import express from 'express'
import mongoose from 'mongoose'

import Task, {IList} from '../database/Tasks-Schema'

const Api = express()

Api.post('/inserir', async(Request, Response) => {
    const data: IList = Request.body;
    let SalvarTarefa = await Task.create(data)
        Response.status(200).send({SalvarTarefa})
})

Api.get('/listar', async(Request, Response) => {
    try {
      const lista = await Task.find()
      Response.status(200).send(lista)
    }
    catch(err) {
    Response.status(400).send(err)
    }    
    })

Api.get('/listTaskFalse', async(Request, Response) => {
  try {
  const lista = await Task.find().where({'done': false}).sort({_id: 'desc'})
  Response.status(200).send(lista)
  }
  catch(err) {
  Response.status(400).send(err)
  }
})

Api.get('/listTaskFalse/old', async(Request, Response) => {
  try {
    const lista = await Task.find().where({'done': false})
    Response.status(200).send(lista)
  }
  catch {
     Response.status(400).send('Ocorreu um erro')
  }
})

Api.get('/listTaskTrue', async(Request, Response) => {
  try {
  const lista = await Task.find().where({'done': true}).sort({_id: 'desc'})
  Response.status(200).send(lista)
  }
  catch(err) {
  Response.status(400).send(err)
  }

  Api.delete('/delete/:_id', async(Request, Response) => {
    try {
    const {_id} = Request.params

    await Task.find().findOneAndRemove({_id})
    Response.status(200).send({suc: `Deletou o id ${_id}`})
    }
    catch {
    Response.status(400).send({err: 'Ocorreu um erro ao excluir'})
    }
  })
})

Api.put('/update/:_id', async(Request, Response) => {
  try {
    const {_id} = Request.params

  const data: IList = Request.body

  await Task.findOne({_id}).findOneAndUpdate(data)

  Response.status(200).send({suc: `Alterado o id ${_id}`})
  }
  catch(err) {
   Response.status(400).send({err: 'Ocorreu um erro'})

  }
})
export {Api}