import mongoose from 'mongoose'
import Seller from './Seller.js';

let schema = new mongoose.Schema(
  {
    seller_id: { type: mongoose.Types.ObjectId, ref: 'seller', required: true },
    title: { type: String, required: true },
    continent: { type: String, required: true },
    country: { type: String, required: true },
    cover_photo: { type: String, required: true },
    description: { type: String, required: true },
    packages: { type: Array, required: true },
    description: { type: String, required: true },
    continent: { type: String, required: true },
    country: { type: String, required: true },
    category_id: { type: mongoose.Types.ObjectId, ref: 'categories', required: true },
    pages: { type: Array, required: true },
    price: { type: Number, required: false },
    stock: { type: Number, required: false }
  }, {
  timestamps: true
}

);
let Destino = mongoose.model("destinos", schema);
export default Destino;
