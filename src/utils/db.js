import mongoose from 'mongoose'
import options from '../config'
import { Item } from '../resources/item/item.model'

export const connect = (url = options.dbUrl, opts={}) => {
  console.log(`\nDatabase url is ${url}`)
  
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
  )
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});