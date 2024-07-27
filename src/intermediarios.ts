import { NextFunction, Request, Response } from "express"

export const meuIntermediario = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passei pelo Intermediário!')


    if (req.params.item === 'sair') {
        return res.send('A requisição foi respondida no intermediário.')
    }

    next()
}

export const IntermediarioGeral = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passou no intermediário Geral!');
    
    next()
}