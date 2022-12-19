import { Router } from "express";


const router = Router()
const products = []


router.get('/', (req, res) =>{
   
    res.json({products})
})

router.post('/', (req, res) => {
    const {prod} = req.body
    products.push(prod)

    res.send({status: 'success'})
})


export default router