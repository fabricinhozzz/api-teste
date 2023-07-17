
const port = 5500

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(bodyParser.urlencoded({extended: true}))

app.get('/products', (req, res, next) =>{
    res.send(dataBase.getProducts())
})

app.get('/products/:id', (req, res, next) => {
    res.send(dataBase.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = dataBase.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/products', (req, res, next) => {
    const product = dataBase.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/products/:id', (req, res, next) => {
    const product = dataBase.delProduct(req.param.id)
    res.send(product)
})

app.listen(port, () => {
    console.log(`servidor executando na porta ${port}`)
})
