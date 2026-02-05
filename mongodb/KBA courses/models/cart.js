import mongoose, { model, Schema } from "mongoose";

const cart_schema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  items: [{
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true }
  }]
});


export const Cart = model('Cart',cart_schema)