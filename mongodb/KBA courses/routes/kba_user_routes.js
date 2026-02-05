import { Router } from 'express';
import user_middleware from '../middleware/user_auth.js';
import { Cart } from '../models/cart.js';



const router = Router();

router.get('/all_courses', user_middleware, (req, res) => {
    res.status(200).send('All courses');
});

router.get('/learn_more', user_middleware, (req, res) => {
    res.status(200).send('Learn more page');
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


