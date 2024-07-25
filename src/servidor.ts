import 'dotenv/config'
import express from 'express'

const servidor = express()

servidor.get('/usuarios', (req, res) => {
    return res.send('ROTA COM CONROLADOR')

}) /// Deste modo eu criei a rota juntamente com o controlador, que é tudo após a virgula.  ===>  ISSO É UMA ROTA COM CONTROLADOR!!!


servidor.get('/') /// => Deste modo eu crio apenas a rota: ===> ISSO É UMA ROTA!!!


servidor.listen(process.env.PORT)
