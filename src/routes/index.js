import express from 'express'
import usersRoute from './users'
import app from '../app'

const router = express.Router()



router.use('/users', usersRoute)
router.get('/', (req, res) => res.send('Olá mundo! 4'))

export default router