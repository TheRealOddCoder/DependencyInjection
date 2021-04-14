import {model} from '../model/model'
import {Request} from 'express'
import {injectable, inject} from 'inversify'

export interface RepoInterface{
    getMovie(): Promise<void>,
    createMovie(req: Request): Promise<void>
}

@injectable()
export class Repo implements RepoInterface{

    async getMovie(){
        return await model.find()
    }

    async createMovie(req: Request){
        //const {title, director} = req.body
        const movie = new model(req.body)
        return await movie.save()
    }
}