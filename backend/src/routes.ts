import { Router } from 'express'

const routes = Router()

import ProductController from './controllers/ProductController'

routes.get('/products', new ProductController().index)
routes.post('/products', new ProductController().create)
routes.delete('/products/:id', new ProductController().delete )

export default routes