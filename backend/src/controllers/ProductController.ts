import { Request, Response } from 'express'

import db from '../database/connection'
import generateUniqueId from '../utils/generateUniqueId'

interface Products {
    id: string;
    name: string;
    description?: string;
    quantity: number;
    value: number;
}

export default class ProductController {
    async index(req: Request, res: Response) {
        const products = await db.select('*').from<Products>('products')

        return res.json(products)
    } 

    async create(req: Request, res: Response) {

        const { name, description, quantity, value} = req.body

        try {

            const id = generateUniqueId()

            await db.insert({
                id,
                name,
                description,
                quantity,
                value
            }).into('products')

            return res.status(201).send()
        } catch (error) {
            return res.status(400).json({
                error: 'Unexpected error at create in new product'
            })
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params

        try {
            await db('products').where('id', id).del()

            return res.status(201).send()
        } catch (error) {
            return res.status(401).send()
        }
    }
}