import { Request, Response } from 'express'
import { createProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'
import { notFound, success, validation } from '../utils/responseApi'

export const indexProduct = (req: Request, res: Response) => {
  const products = [
    {
      name: 'Sepatu',
      price: 200000
    },
    {
      name: 'kaos',
      price: 20000
    }
  ]

  const {
    params: { name }
  } = req

  if (name) {
    const filterProduct = products.filter((product) => {
      if (product.name === name) {
        return product
      }
    })
    if (filterProduct.length === 0) {
      logger.info('Product not found')
      res.status(404).send(notFound('Product not found'))
    } else {
      logger.info('Success get product')
      res.send(success('Success get product', filterProduct[0]))
    }
  }
  logger.info('Success get product')
  res.send(success('Get products', products))
}

export const createProduct = (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body)
  logger.error(value)
  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message)
    res.status(422).send(validation(error.details[0].message))
  }
  logger.info('success add new product')
  res.send(success('Product has been created', req.body))
}
