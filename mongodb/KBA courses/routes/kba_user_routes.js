import { Router } from 'express';
import user_middleware from '../middleware/user_auth.js';
import { Cart } from '../models/cart.js';
import sharp from 'sharp';
import { course_model } from '../models/course.js';


const router = Router();

router.get('/all_courses', user_middleware, (req, res) => {
    res.status(200).send('All courses');
});

router.get('/learn_more', user_middleware, (req, res) => {
    res.status(200).send('Learn more page');
});

router.get('/find_by_coursename', user_middleware, async (req, res) => {
  try {
    const { course_name } = req.query;

    if (!course_name) {
      return res.status(400).json({ message: 'course_name is required' });
    }

    const data = await course_model.findOne({ course_name });

    if (!data) {
      return res.status(404).json({ message: 'course not found' });
    }

    let compressedImage = null;

    if (data.course_image) {
      const imageBuffer = Buffer.from(data.course_image, 'base64');

      compressedImage = await sharp(imageBuffer)
        .resize({ width: 300 })
        .jpeg({ quality: 70 })
        .toBuffer();
    }

    return res.status(200).json({
      image: compressedImage ? compressedImage.toString('base64') : null,
      pdf: data.course_pdf || null
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'internal server error' });
  }
});


router.post('/add_to_cart', user_middleware, async (req, res) => {
  try {
    const userId = req.user_id;
    console.log(userId);
    
    const { course_id, quantity, price } = req.body;

    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      const itemIndex = cart.items.findIndex(
        item => item.course.toString() === course_id
      );
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } 
      else {
        cart.items.push({
          course: course_id,
          quantity,
          price
        });
      }

      await cart.save();
      return res.status(200).json({ msg: 'Cart updated' });
    }
    cart = await Cart.create({
      user: userId,
      items: [
        {
          course: course_id,
          quantity,
          price
        }
      ]
    });

    res.status(201).json({ msg: 'Cart created', cart });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Something went wrong' });
  }
});


router.get('/view_cart', user_middleware, async(req,res)=>{
  try {
    const userId = req.user_id;
    const data = await Cart.findOne({user:userId})
    if(data){
      res.status(200).json({msg:"success",data:data})
    }else{
      res.status(400).json({msg:"cart empty"})
    }
  } catch (error) {
    
  }
})
export default router;


