import express from 'express'
import router from './routes/index'

const app = express()
app.use(express.json())

const PORT = 3000

app.use('/api/countries', router)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

console.log('test')
