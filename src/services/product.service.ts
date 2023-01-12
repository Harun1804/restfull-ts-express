import productModel from '../models/product.model'
import { logger } from '../utils/logger'
import ProductType from '../types/product.type'

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

export const storeProduct = async (payload: ProductType) => {
  await productModel.create(payload)
}

export const getProductById = async (id: String) => {
  return await productModel.findOne({ product_id: id })
}
