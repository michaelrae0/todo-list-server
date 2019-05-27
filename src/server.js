import express from 'express'
import config from './config'

export const app = express()

app.get('/', (req, res) => res.send({ message: 'hello' }))

export const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`Server listening on http://localhost:${config.port}`)
    })
  } catch (e) {
    console.log(e)
  }
}