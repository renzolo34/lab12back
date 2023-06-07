import { Schema, InferSchemaType, model } from 'mongoose';

export interface IProduct {
  name: string,
  category: string,
  location: string,
  price: number,
  imageName: string,
  imagePath: string
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  imageName: { type: String, required: true },
  imagePath: { type: String, required: true }
});

type Product = InferSchemaType<typeof productSchema>;

export const Product = model<Product>('Product', productSchema);