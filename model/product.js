import mongoose, { Schema } from 'mongoose';

// DB_Product_Schema
const productSchema = new Schema({
  title: String,
  description: String,
  brand: String,
  category: String,
  thumbnail: String,
  rating: Number,
  price: Number,
  discountPercentage: Number,
});

export const Product = mongoose.model("Product", productSchema);



// image: String,