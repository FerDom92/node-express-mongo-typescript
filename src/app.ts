import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import db from './config/mongo'
import { router } from './routes'

const PORT = process.env.PORT || 3005
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

db().then(() => console.log('Database connected...'))

app.listen(PORT, () => console.log(`\nServer online http://localhost:${PORT}\n`))