const connectToMongo = require('./db');
const express = require('express')
connectToMongo();


const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('HELLO TINA!')
  })
app.get('/api/login', (req, res) => {
  res.send('LoginIN!')
})
app.get('/api/signup', (req, res) => {
    res.send('Sign Up!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})