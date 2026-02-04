// import mongoose, { Schema, model } from 'mongoose';

// const cart_item_schema = new Schema({
//   course: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Course',
//     required: true
//   },
//   quantity: { type: Number, required: true, min: 1 },
//   price: { type: Number, required: true }
// });

// const cart_schema = new Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//       unique: true 
//     },
//     items: [cart_item_schema]
//   },
// );

// export const cart_model = model('Cart', cart_schema);
