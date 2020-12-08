  
const express = require('express')
const router = express.Router()
const carsModal = require('./cars-modal')

router.get('/' , async (_, res) => {
    try {
        const cars = await carsModal.getAll()
        res.status(200).json(cars)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})


router.post('/',  async (req, res) => {

    try {
        const data = await accountsDb.create(req.body)
        res.status(200).json(data)
    } catch(err) {
        res.status(500).json({message: err.message})
    }

})




module.exports = router