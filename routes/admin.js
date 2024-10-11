import express from 'express'
import root from '../util/rootpath.js'
import path from 'path'
import { title } from 'process'
import * as productControllers from '../controllers/products.js'

const router = express.Router()

const products = []

router.get('/add-product',productControllers.getAddProduct)

router.post('/add-product', productControllers.getAllProducts)

export { router as adminroutes, products}