import mongoose from 'mongoose'
import options from '../config'

export const connect = (url = options.dbUrl, opts={}) => {
  console.log('\n/----------------/----------------/')
  console.log(`db url is ${url}`)
  console.log('/----------------/----------------/\n')
  
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
  )
}