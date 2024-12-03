const express = require('express')
const app = express()
const ort = 3000

 app.get('/index', (req, res) => {
res.send('erro')
 })
 app.get('/about', (req, res) => {
    res.send('Hello World!')
 })
 
app.get('/users', (req, res) => {
    res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('Hello World!')
})

app.get('/portifolio', (req, res) => {
    res.send('Hello World!')
})

app.get('/signup', (req, res) => {
    res.send('Hello World!')
})

app.get('/signin', (req, res) => {
    res.send('Hello World!')
    (/users/:userid)
})

 app.listen(port, () => {
console.log(`Example app listening on
port ${port}`)
 })
