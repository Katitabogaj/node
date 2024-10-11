import express from 'express'
import root from '../util/rootpath.js'
import path from 'path'
import * as productControllers from '../controllers/products.js'

const router = express.Router()

router.get('/shop', productControllers.postAddedProduct)

export default router