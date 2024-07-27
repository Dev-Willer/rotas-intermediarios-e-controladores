import 'dotenv/config'
import express from 'express'
import { buscarUsuario, usuarios, home, itemProdutos } from './controladores'
import { IntermediarioGeral, meuIntermediario } from './intermediarios'

const servidor = express()

servidor.use(IntermediarioGeral)

servidor.get('/', home) 

servidor.get('/produtos/:item', meuIntermediario, itemProdutos)

servidor.get('/usuarios', usuarios) 

servidor.get('/users/:email', buscarUsuario)


servidor.listen(process.env.PORT)
