import { Router } from 'express'
import { createProduct, indexProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', indexProduct)
ProductRouter.get('/:name', indexProduct)
ProductRouter.post('/', createProduct)
