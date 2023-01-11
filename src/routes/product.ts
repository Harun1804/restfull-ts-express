import { NextFunction, Request, Response, Router } from 'express'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send({
    status: true,
    statusCode: 200,
    data: [
      {
        name: 'Sepatu Sport',
        price: 150000
      }
    ]
  })
})
