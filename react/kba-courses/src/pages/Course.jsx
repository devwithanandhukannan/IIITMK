import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Course = () => {
    const [role, setRole] = useState('user')
    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (token) {
            try {
                const payload = token.split('.')[1]
                const decoded = JSON.parse(atob(payload))
                if (decoded.role === 'admin') setRole('admin')
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    
    const navigate = useNavigate()
    const { id } = useParams();
    const editCourse = () => {
        console.log('hii');
        
        navigate('/edit-course/' + id)

    }
   const deleteCourse = async () => {
  try {
    const response = await fetch('/api/admin/delete', {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ course_id: id }) 
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data.msg);
      navigate('/')
    } else {
      console.log('Delete failed:', data.msg);
    }
  } catch (error) {
    console.log(error);
  }
};
    const [courseName, setCourseName] = useState('')
    const [courseType, setCourseType] = useState('Self-Paced')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('5000')
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch('/api/admin/viewcourse/' + id, {
                    credentials: 'include'
                });
                const data = await response.json();
                if (response.ok) {
                    console.log(data);
                    // Optionally, set your form fields
                    setCourseName(data.course.course_name);
                    setCourseType(data.course.course_type);
                    setDescription(data.course.description);
                    setPrice(data.course.price.toString()); // convert to string for select
                } else {
                    console.log('Fetch course failed');
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchCourse();
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="bg-white text-gray-900 mb-10 pb-10">
                <div className="max-w-4xl mx-auto p-5 ">

                    <section>
                        <a className="flex items-center my-5 gap-1 font-medium  " href='/courses'>  Back to Courses</a>
                    </section>

                    <div className="bg-purple-100 shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="./banner-kba.png"
                            alt="Course Thumbnail"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                                <h1 className="text-3xl font-bold text-purple-800">
                                    {courseName}
                                </h1>
                                <div className="flex items-center mt-2 sm:mt-0">
                                    <span className="text-2xl text-red-500 font-semibold mr-4">
                                        Rs.{price}
                                    </span>
                                    <button className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                                    Description
                                </h2>
                                <p>{description}</p>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                                    Prerequisites
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>Basic understanding of blockchain technology</li>
                                    <li>Familiarity with programming languages</li>
                                    <li>Internet access</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-purple-800 mb-2">
                                    Features
                                </h2>
                                <ul className="list-disc list-inside">
                                    <li>40 hours of content</li>
                                    <li>Certificate of completion</li>
                                    <li>Access to community forums</li>
                                    <li>Downloadable resources</li>
                                    <li>24/7 support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {role === 'admin' && (
                        <div className="flex flex-row justify-end gap-4 pr-5 max-w-4xl mx-auto mt-4">
                            <button
                                onClick={editCourse}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full h-10 px-6 focus:outline-none focus:shadow-outline"
                            >
                                Edit Course
                            </button>
                            <button
                                onClick={deleteCourse}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-full h-10 px-6 focus:outline-none focus:shadow-outline"
                            >
                                Remove Course
                            </button>
                        </div>
                    )}
            </div>
        </>
    )
}

export default Course