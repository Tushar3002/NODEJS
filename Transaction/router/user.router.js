import express from 'express'
import { managedTransaction, unmanagedTransaction } from '../controllers/user.controller.js'

const router=express.Router()

router.get('/add',unmanagedTransaction)
router.get('/addman',managedTransaction)



export default router