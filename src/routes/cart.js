import { Router } from "express";


const router = Router()
const cart = []


router.get('/', (req, res) =>{
    
    res.json({cart})
})

router.post('/', (req, res) => {
    const prod = req.body
    cart.push(prod)

    res.send({status: 'success'})
})


export default router