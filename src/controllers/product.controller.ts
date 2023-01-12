import { Request, Response } from 'express'
import { createProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'
import { fails, notFound, success, validation } from '../utils/responseApi'
import { getProduct, getProductById, storeProduct } from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'


export const indexProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  if (id) {
    const product = await getProductById(id);
    if(product){
      logger.info('Success get product')
      res.send(success('Success get product', product))
    }else{
      logger.info('Product Not Found')
      res.status(404).send(notFound('Product not found', {},404))
    }
  }else{
    const products: any = await getProduct()

    logger.info('Success get product')
    res.send(success('Get products', products))
  }
}

export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message)
    res.status(422).send(validation(error.details[0].message))
  }

  try {
    await storeProduct(value)

    logger.info('success add new product')
    res.send(success('Product has been created', req.body, 201))
  } catch (e) {
    logger.error('ERR: Product - Create = ', e)
    res.status(500).send(fails(`${e}`))
  }
}
