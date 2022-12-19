import express from 'express'
import cart from './routes/cart.js'
import products from './routes/products.js'
const newProduct = new ProductManager('./files/data.json')

const express = require('express')
const app = express()

app.get('/products', (request, response) => {
    const product = newProduct.getProducts()
    
    let limit = request.query.limit
    console.log(limit)
    if(limit){
        return response.send(product.slice(0, parseInt(limit)))
    }
    
    return response.send(product)
       
}) 

app.get('/products/:id', (request, response) => {
    let id = request.params.id
    console.log(id)
    const productId = newProduct.getProductById(parseInt(id))
    return response.send(productId)
})
app.put('/api/prod', (req, res) => {
    const prod = req.body

    const idxUser = products.findIndex(u => u.name.toLowerCase() == user.name.toLowerCase())
    if(idxUser < 0){
        return res.status(404).json({status: "Error", error: "User not found"})
    }
    products[idxUser] = user

    res.send({status: "success", message: "'User updated"})
})
app.delete('/api/user/:pid', (req, res) => {
    const pid = req.params.name
    const currentLength = products.length
    products = products.filter(u => u.name != name)
    if(products.length == currentLength){
        return res.status(404).json({status: "error", error: "user not found"})
    }
    res.send({status: "success", message: "user deleted"})

})

app.use('/api/cart', cart)
app.use('/api/products', products)

app.listen(8080)