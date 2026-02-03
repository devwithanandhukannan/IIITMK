import { Router } from 'express';
import { add_student, delete_student, find_student_by_name, update_student_by_id, view_students } from '../controller/Student_controller.js';

export const studentRoute = Router();

studentRoute.get('/',view_students)
studentRoute.post('/add',add_student)
studentRoute.get('/search/:name', find_student_by_name)
studentRoute.put('/update', update_student_by_id )
studentRoute.delete('/delete',delete_student)
