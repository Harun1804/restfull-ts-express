import express, { Application } from 'express'
import { routes } from './routes'
import { logger } from './utils/logger'
import bodyParser from 'body-parser'
import cors from 'cors'
import './utils/connectDB'

const app: Application = express()
const port: Number = 3000

// parse body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors setting
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

routes(app)

app.listen(port, () => {
  logger.info(`Server is running on port: ${port}`)
})
