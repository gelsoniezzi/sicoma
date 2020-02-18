import express from 'express'
import UserController from '../controllers/UserController'

const router = express.Router()

router.post('/', UserController.store)

router.get('/', (req, res) => {
    res.send({
        name: 'Gelson Garcia',
        mat: '1885704',
        passwd: '******'
    })
})

router.get('/test')

export default router