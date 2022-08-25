import express from 'express'
import cors from 'cors'

import router from './routes'

const app = express()
app.use(cors())
const port = 3000

app.use(router)

app.listen(port, () => console.log(`Magic happens on port ${port}`))
