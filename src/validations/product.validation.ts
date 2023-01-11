import Joi from 'joi'
import { ProductInterface } from '../interfaces/product.interface'

export const createProductValidation = (payload: ProductInterface) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().allow('', null)
  })

  return schema.validate(payload)
}
