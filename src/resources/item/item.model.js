import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    task: {
      type: String,
      required: true,
      trim: true
    },
    id: {
      type: String,
      required: true,
      unique: true
    },
    yolo: {
      type: String
    }
  }, 
  { timestamps: true }
)

export const Item =  mongoose.model('item', itemSchema)