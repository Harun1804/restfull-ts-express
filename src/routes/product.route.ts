import { Router } from 'express'
import { createProduct, indexProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', indexProduct)
ProductRouter.get('/:id', indexProduct)
ProductRouter.post('/', createProduct)
