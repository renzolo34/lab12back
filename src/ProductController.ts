import { Request, Response } from 'express';
import { Product, IProduct } from './model/Product';
import { HydratedDocument } from 'mongoose';

export const createProduct = async (req: Request, res: Response) => {
  const { body, file } = req;

  try {

    const product: HydratedDocument<IProduct> = new Product({
      name: body.name,
      category: body.category,
      location: body.location,
      price: Number(body.price),
      imageName: file?.filename,
      imagePath: `public/images/${file?.filename}`
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error: any) {
    res.json(error.message);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { params, body, file } = req;

  try {

    const updatedProduct = await Product.findByIdAndUpdate(
      params.id,
      {
        name: body.name,
        category: body.category,
        location: body.location,
        price: Number(body.price),
        imageName: file?.filename,
        imagePath: `public/images/${file?.filename}`
      },
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error: any) {
    res.json(error.message);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { params } = req;

  try {
    const deletedProduct = await Product.findByIdAndRemove(params.id);

    res.status(204).json(deletedProduct);
  } catch (error: any) {
    res.json(error.message);
  }
};

export const findManyProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().sort({ id: 'asc' });
    res.json(products);
  } catch (error: any) {
    res.json(error.message);
  }
};

export const findFirstProduct = async (req: Request, res: Response) => {
  const { params } = req;

  try {
    const product = await Product.findById(params.id);

    return res.json(product);
  } catch (error: any) {
    res.json(error.message);
  }
};