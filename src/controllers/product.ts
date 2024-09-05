import { Request, Response } from "express"
import { getProduct, getProducts, insertProduct, modifyProduct, removeProduct } from "../services/product"
import { handleHttp } from "../utils/error.handle"

const getOneProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const resp = await getProduct(id)

    res.send(resp)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_PRODUCT')
  }
}

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const resp = await getProducts()

    res.send(resp)
  } catch (error) {
    handleHttp(res, 'ERROR_GET_PRODUCTS')
  }
}

const createProduct = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const resp = await insertProduct(body)

    res.send(resp)
  } catch (error) {
    handleHttp(res, 'ERROR_CREATE_PRODUCT', error)
  }

}

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const body = req.body
    const resp = await modifyProduct(id, body)

    res.send(resp)
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_PRODUCT')
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const resp = await removeProduct(id)

    res.send(resp)
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_PRODUCT')
  }
}

export {
  createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct
}

