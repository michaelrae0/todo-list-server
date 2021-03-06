import { Router } from 'express'
import controllers from './item.controllers'

const itemRouter = Router()

/* /item */
itemRouter
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)
  .delete(controllers.removeAll)

/* /item/:id */
itemRouter
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default itemRouter