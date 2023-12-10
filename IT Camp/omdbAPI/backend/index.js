const express = require('express')
const cors = require('cors')
const fs = require('fs')
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())
app.get('/json', async (req, res) => {
  const uri = `mongodb+srv://ilhanbuhic:${process.env.URI_USER_PASSWORD}@ilhan-movies.aehewig.mongodb.net/?retryWrites=true&w=majority`

  const getJSON = async () => {
    try {
      const client = new MongoClient(uri)
      console.log('Connecting ...')
      await client.connect()

      const database = client.db('ilhan-database')
      const collection = database.collection('ilhan-json')

      const result = await collection.find({}).toArray()

      await client.close()
      return result
    } catch (error) {
      throw new SyntaxError('Failed to connect to MongoDB', error)
    }
  }
  const result = await getJSON()
  res.status(200).send(result)
})

try {
  app.listen(3001, () => {
    console.log('Server is listening on port 3001')
  })
} catch (error) {
  throw new SyntaxError('Error starting the server', error)
}
