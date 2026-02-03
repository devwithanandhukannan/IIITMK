import { student_model } from "../model/student_model.js";

export const view_students = async(req,res)=>{
    try {
        const student = await student_model.find()
        res.status(200).json(student)
    } catch (error) {
        console.log(error);
    }
}

export const add_student = async(req,res)=>{
    try {
        const {name, age, grade} = req.body;
        const student = await student_model.create({
            name,
            age,
            grade
        })
        return res.status(200).json({msg:'inserted',data:student})
    } catch (error) {
        console.log(error);
        
    }
}

export const update_student_by_id = async(req,res)=>{
    try {
        const {id, name, age, grade} = req.body;
        const updatedStudent = await student_model.findByIdAndUpdate(id, {name,age,grade})
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


export const find_student_by_name = async(req,res)=>{
    try {
        const {name} = req.params;
        const student = await student_model.findOne({name})
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        return res.status(200).json({
            message: "Student found",
            data: student
        });
        
    } catch (error) {
        console.log(error);
        
    }
}

export const delete_student = async (req,res)=>{
    try {
        const {id} = req.body
        console.log(id);
        
        const del_student = await student_model.findByIdAndDelete(id)
        if(del_student){
            return res.json({msg:'deleted !',data: del_student})
        }else{
            return res.json({msg:'something went wrong !',data: del_student})
        }
    } catch (error) {
        console.log(error);
        
    }
}