import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

import config from './config'
import { connect } from './utils/db';
import itemRouter from './resources/item/item.router'
import listRouter from './resources/list/list.router'

export const app = express()


app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/item', itemRouter)
app.use('/list', listRouter)


export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`Server listening on http://localhost:${config.port}`)
      console.log('\n/----------------/----------------/\n')
    })
  } catch (e) {
    console.log(e)
  }
}