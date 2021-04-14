
import {ControllerInterface} from '../controller/controller'
import {Application, Request, Response} from 'express'
import {injectable, inject} from 'inversify'
import { Types } from '../config/types'

export interface RoutesInterface{
    routes(app: Application): Promise<void>
}


@injectable()
export class Routes implements RoutesInterface{

        public controller: ControllerInterface
        constructor(@inject(Types.Controller) controller: ControllerInterface){
            this.controller = controller
        }
    
        public async routes(app: Application): Promise<void> {
            app.get('/get',(req: Request , res: Response) => { 
                this.controller.getMovie(req,res)
            })

            app.post('/create',(req: Request, res: Response)=> {
                this.controller.createMovie(req,res)
            })
            
        }

    
}