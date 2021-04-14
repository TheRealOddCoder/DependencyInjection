//import "reflect-metadata"
import {Container} from 'inversify'
import {Types} from './types'
import {ControllerInterface, Controller} from '../controller/controller'
import {RoutesInterface, Routes} from '../routes/routes'
import {RepoInterface, Repo} from '../repo/repo'

const container = new Container()

container.bind<ControllerInterface>(Types.Controller).to(Controller)
container.bind<RoutesInterface>(Types.Routes).to(Routes)
container.bind<RepoInterface>(Types.Repo).to(Repo)

export {container}