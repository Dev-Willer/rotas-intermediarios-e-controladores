import 'dotenv/config'
import express from "express";

const app = express()

app.get('/', (_req, res) => {
    return res.send('Servidor iniciado com sucesso!')
})

app.listen(process.env.PORT)