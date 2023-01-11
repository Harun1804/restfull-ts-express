import { Request, Response, Router } from 'express'

export const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})
