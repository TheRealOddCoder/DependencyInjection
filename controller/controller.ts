import {RepoInterface} from '../repo/repo'
import {Request, Response} from 'express'
import {injectable, inject} from 'inversify'
import { Types } from '../config/types'


export interface ControllerInterface{
    getMovie(req: Request, res: Response): Promise<void>,
    createMovie(req: Request, res: Response): Promise<void>
}



@injectable()
export class Controller implements ControllerInterface{
    private repo: RepoInterface
    constructor(@inject(Types.Repo) repo:RepoInterface){
        this.repo = repo
    }

    async getMovie(req : Request , res : Response): Promise<void>{   
        try{
            const movies = await this.repo.getMovie()
            res.status(200).json({
                movies: movies
            })
       }
       catch(error){
           res.status(500).json({error: error})
       }
    }
    

    async createMovie(req : Request, res: Response): Promise<void>{
        try{
            const newMovie = await this.repo.createMovie(req)
            res.status(200).json({
                created: newMovie
            })
        }
        catch(error){
            res.status(500).json({error: error})
        }

    }
}
