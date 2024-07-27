import { Request, Response } from "express"

export const users = [
    {nome:'Ana Maria', email:'anamaria@email.com.br'},
    {nome:'Julia Santos', email:'juliasantos@email.com.br'},
    {nome:'Cristina Faria', email:'cristinafaria@email.com.br'}
]

export const home = (req: Request, res: Response) => {
    return res.send('Cheguei no Controlador!')
}


export const usuarios = (req: Request, res: Response) => {
    return res.send('usuario é: ')
} 

export const itemProdutos = (req: Request, res: Response) => {
    return res.send('Cheguei no Controlador passando pelo intermediário da rota de produtos/:item!')
}

export const buscarUsuario = (req: Request, res: Response) => {
    const {email} = req.params

    const user = users.find((item => {
        return item.email === email
    }))

    if (!user) {
        return res.send('Pessoa não encontrada!')
    }

    return res.send(user)
}

