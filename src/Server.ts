import express from 'express';
import { router } from './Router';
import 'dotenv/config'

import cors from 'cors'
import { config } from 'dotenv';

config()


const server = express()
server.use(express.json())
server.use(cors())

server.use(router)

server.listen(process.env.PORT, () => {
  console.log('iniciado na porta ' + process.env.PORT)
})
