import { Router } from 'express'
import controllers from './list.controllers'

const listRouter = Router()

// /list
listRouter
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)
  .delete(controllers.removeAll)

// /list/:id
listRouter
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.addItemToList)
  .delete(controllers.removeOne)

export default listRouter