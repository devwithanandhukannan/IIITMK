import { Router } from 'express';
import { courses } from '../map.js';
import admin_middleware from '../middleware/admin_auth.js';

const router = Router();

router.get('/all_courses', (req, res) => {
    res.status(200).send({allcourses: JSON.stringify(Object.fromEntries(courses))});
});


// router.get('/viewcourse/:course_name/:course_price',(req,res)=>{
//     const course_name = req.params.course_name
//     console.log(course_name);
//     const course_price = req.params.course_price
//     console.log(course_price);
//     let result = []
//     for( let [key, data] of courses){
//         if(data.course_name == course_name || data.price == Number(course_price)){
//             result.push({
//             key: key,
//             data: data
//         });
//         }
//         console.log(data);
        
//     }
//     // let data = courses.get(Number(course_id))
//     res.status(200).json({result})
    
// })

router.get('/viewcourse', (req, res) => {
  const course_id = req.query.course_id;
    let data = courses.get(Number(course_id))
    if(data){
        res.status(200).send({course: {data}})
    }else{
        res.status(400).send({msg: 'data doest existed'})
    } 
});



router.put('/update_course', (req, res) => {
    try {
        const { course_name, course_id, course_type, description, price } = req.body;
        if(courses.has(course_id)){
            courses.set(course_id, { course_name, course_type, description, price })
            return res.status(400).json({msg:`updated course ${course_id}`})
        }else{
            return res.status(400).json({msg:'invalid course id'})
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Something went wrong!');
    }
});

router.delete('/delete', (req, res) => {
    try {
        const {course_id } = req.body;
        if(courses.has(course_id)){
            courses.delete(course_id)
            return res.status(400).json({msg:`Deleted course ${course_id}`})
        }else{
            return res.status(400).json({msg:'invalid course id'})
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Something went wrong!');
    }
});

router.patch('/patch_price', (req, res) => {
    try {
        const {course_id, price } = req.body;
        if(courses.has(course_id)){
            let course = courses.get(course_id)
            course.price = price
            return res.status(400).json({msg:`updated price to -${price}`})
        }else{
            return res.status(400).json({msg:'invalid course id'})
        }
    } catch (error) {
        console.error(error);
        res.status(400).send('Something went wrong!');
    }
});


router.post('/addcourse', admin_middleware, (req, res) => {
        try {
            const { course_name, course_id, course_type, description, price } = req.body;
            console.log(course_name, course_id, course_type, description, price);
            if (courses.has(course_id)) {
                return res.send('course id already existed')
            } else {
                courses.set(course_id, { course_name, course_type, description, price })
                return res.status(201).send('course added successfully')
            }
        } catch (error) {
            console.error(error);
            res.status(400).send('Something went wrong!');
        }
});

export default router;
