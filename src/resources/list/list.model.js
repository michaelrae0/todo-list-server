import mongoose from 'mongoose'
import { itemSchema } from '../item/item.model'

const listSchema = new mongoose.Schema({
    id: {
      type: String,
      require: true,
    },
    items: [ itemSchema ]
  }
)

export const List =  mongoose.model('list', listSchema)