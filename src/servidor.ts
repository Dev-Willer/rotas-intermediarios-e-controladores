import 'dotenv/config'
import express from 'express'

const servidor = express()

servidor.get('/usuarios', (req, res) => {
    return res.send('ROTA COM CONROLADOR')

}) /// Deste modo eu criei a rota juntamente com o controlador, que é tudo após a virgula.  ===>  ISSO É UMA ROTA COM CONTROLADOR!!!


servidor.get('/') /// => Deste modo eu crio apenas a rota: ===> ISSO É UMA ROTA!!!



/////////////////////////////############# BUSCANDO UM E-MAIL EM UM VETOR || COM VALIDAÇÃO ##############////////////////////////////////////////////////////

const users = [
    {nome:'Ana Maria', email:'anamaria@email.com.br'},
    {nome:'Julia Santos', email:'juliasantos@email.com.br'},
    {nome:'Cristina Faria', email:'cristinafaria@email.com.br'}
]

servidor.get('/users/:email', (req, res) => {
    const {email} = req.params

    const user = users.find((item => {
        return item.email === email
    }))

    if (!user) {
        return res.send('Pessoa não encontrada!')
    }

    return res.send(user)
})


















servidor.listen(process.env.PORT)
