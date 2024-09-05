import { Product } from '../interfaces/product.interface'
import ProductModel from '../models/product'

const getProducts = async () => {
  const resp = await ProductModel.find({})

  return resp
}

const getProduct = async (id: string) => {
  const resp = await ProductModel.findOne({_id: id})

  return resp
}

const insertProduct = async (item: Product) => {
  const respInsert = await ProductModel.create(item)

  return respInsert
}

const modifyProduct = async (id: string, data: Product) => {
  const resp = await ProductModel.findOneAndUpdate(
    { _id: id },
    data,
    { new: true }
  )

  return resp
}

const removeProduct = async (id: string) => {
  const resp = await ProductModel.findOneAndDelete({ _id: id})

  return resp
}

export { getProduct, getProducts, insertProduct, modifyProduct, removeProduct }
