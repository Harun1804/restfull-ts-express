import productModel from '../models/product.model'
import { logger } from '../utils/logger'

export const getProduct = async () => {
  return await productModel
    .find()
    .then((data) => {
      return data
    })
    .catch((err) => {
      logger.info('Cannot get data from DB')
      logger.error(err)
    })
}