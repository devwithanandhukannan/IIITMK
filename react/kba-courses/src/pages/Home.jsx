import React, { useState } from 'react'
import Navbar from '../components/navbar'
import CourseCard from '../components/CourseCard'
import { useAuth } from '../auth_custom_hook/AuthContext'


const Home = () => {
    const [view_all, setViewAll] = useState(true)
    const data = useAuth()
    console.log(data);
    
    return (
        <>
            {/* hero */}
            <div className='bg-purple-100 text-purple-950 p-10 rounded shadow-xl flex flex-col items-center justify-center mt-1 text-center'>
                <h1 className='font-bold text-xl md:text-3xl lg:text-4xl'>Learn Blockchain Technology From Kerala's First Dedicated Facility for Blockchain Education</h1>
                <h2 className='mt-4 text-lg md:text-xl lg:text-2xl'>Since 2017</h2>
            </div>

            {/* topcourses */}
            <div className='bg-purple-100 flex flex-col items-center justify-center my-10 p-10 text-center'>
                <h1 className='font-bold text-2xl md:text-4xl text-purple-800'>BROWSE OUR TOP COURSES</h1>
                <h2 className='font-medium text-lg md:text-xl text-purple-400 mt-4'>Choose the course that's right for your career goals.</h2>
            </div>

            {/* card */}
            <CourseCard view_all={view_all}/>
            {/* all course button */}
            <div className='flex justify-center mb-40'>
                <button className='w-80 h-10 rounded-full bg-purple-500 text-white font-medium  hover:bg-purple-600'
                onClick={()=>setViewAll(!view_all)}
                >View all Courses</button>
            </div>
        </>
    )
}

export default Home