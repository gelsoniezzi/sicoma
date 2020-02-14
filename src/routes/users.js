import express from 'express'

const router = express.Router()



router.get('/', (req, res) => {
    res.send({
        name: 'Gelson Garcia',
        mat: '1885704',
        passwd: '******'
    })
})

router.get('/test')

export default router