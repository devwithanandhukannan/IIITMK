
import { book_model } from "../model/book.js";

export const view_books = async(req,res)=>{
    try {
        const student = await book_model.find()
        res.status(200).json(student)
    } catch (error) {
        console.log(error);
    }
}

export const add_book = async(req,res)=>{
    try {
        const {title, author, price, publishedYear, availability} = req.body;
        const student = await book_model.create({
            title,
            author,
            price,
            publishedYear,
            availability
        })
        return res.status(200).json({msg:'inserted',data:student})
    } catch (error) {
        console.log(error);
        
    }
}

export const update_book_by_id = async(req,res)=>{
    try {
        const {id, title, author, price, publishedYear, availability} = req.body;
        const updatedStudent = await book_model.findByIdAndUpdate(id, {
            title,
            author,
            price,
            publishedYear,
            availability
        })
        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        return res.status(200).json({
            message: "Student updated successfully",
            data: updatedStudent
        });
    } catch (error) {
        console.log(error);
        
    }
}


export const find_book_by_id = async(req,res)=>{
    try {
        const {id} = req.params;
        const student = await book_model.findById(id)
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }else{
            return res.status(200).json({
                message: "Student found",
                data: student
            });
        }
        
    } catch (error) {
        return res.status(200).json({
                message: "Student found",
                data: student
            });
        console.log(error);
        
    }
}

export const delete_book = async (req,res)=>{
    try {
        const {id} = req.body
        const del_student = await book_model.findByIdAndDelete(id)
        if(del_student){
            return res.json({msg:'deleted !',data: del_student})
        }else{
            return res.json({msg:'something went wrong !',data: del_student})
        }
    } catch (error) {
        console.log(error);
        
    }
}