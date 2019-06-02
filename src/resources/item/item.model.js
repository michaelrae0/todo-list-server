import mongoose from 'mongoose'

export const itemSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      trim: true
    },
    status: String
  }
)

export const Item =  mongoose.model('item', itemSchema)