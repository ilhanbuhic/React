const express = require('express')
const cors = require('cors')
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())
app.get('/', async (req, res) => {
  const uri = `mongodb+srv://ilhanbuhic:${process.env.URI_USER_PASSWORD}@ilhan-movies.aehewig.mongodb.net/?retryWrites=true&w=majority`

  const getJSON = async () => {
    try {
      const client = new MongoClient(uri)
      console.log('Connecting ...')
      await client.connect()

      const database = client.db('ilhan-database')
      const collection = database.collection('ilhan-json')

      const JSONPayload = await collection.find({}).toArray()

      await client.close()
      return JSONPayload
    } catch (error) {
      throw new SyntaxError('Failed to connect to MongoDB', error)
    }
  }
  const JSONPayload = await getJSON()
  res.status(200).send(JSONPayload)
})

try {
  PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  })
} catch (error) {
  throw new SyntaxError('Error starting the server', error)
}
