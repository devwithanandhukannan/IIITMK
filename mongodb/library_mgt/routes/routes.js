import { Router } from 'express';
import { add_book, delete_book, find_book_by_id, update_book_by_id, view_books } from '../controller/Book_controller.js';

export const book_routes = Router();

book_routes.get('/',view_books)
book_routes.post('/add',add_book)
book_routes.get('/search/:id', find_book_by_id)
book_routes.put('/update', update_book_by_id )
book_routes.delete('/delete',delete_book)
