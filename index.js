const express = require('express')

const app = express()
app.use(express.json())

let array = ["bat","ball"]


//GET all products
app.get('/api/products',(req,res)=>{
    res.status(200).send(array)
})


//Search Product
app.get('/api/products/:pro',(req,res)=>{
    console.log(req.url)
    const pro= req.params.pro

    const bool =array.filter(value=> pro===value)

    if(bool.length){
        res.send(`${pro} is present in the list`)
    } else {
        res.status(200).send(" searched product is not in list")
    }
})

//addning product
app.post('/api/products',(req,res)=>{
    console.log(req.url)
    const product =req.body.product;
    array.push(product);
    res.status(201).send(` ${product} added`)
})

//Delete Product
app.delete('/api/products/:pro',(req,res)=>{
    console.log(req.url)
    const pro= req.params.pro

    array =array.filter(value=> pro!==value)
    res.status(200).json({message:`deleted product ${pro}`})
})



app.listen(3000,()=>{
    console.log("server listening on port 3000 ...")
})
