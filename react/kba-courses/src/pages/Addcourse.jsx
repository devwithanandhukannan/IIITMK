import React, { useState } from 'react'
import Navbar from '../components/navbar'

const Addcourse = () => {
  const [courseName, setCourseName] = useState('')
  const [courseType, setCourseType] = useState('Self-Paced')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('5000')
  
  const saveCourse = async(e) =>{
    e.preventDefault()    
    try {
      const response = await fetch('/api/admin/addcourse',{
        method:'POST',
        credentials:'include',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({
        course_name: courseName,
        course_type: courseType,
        description: description,
        price: Number(price)
      })
      })
      const data = await response.text();
      if (response.ok) {
                console.log('Course created successfully!')
            } else {
                console.log(data.message)
            }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <Navbar />
      <section className="bg-white mb-20">
        <div className="container m-auto max-w-2xl py-2">
          <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">

            <form onSubmit={saveCourse}>
              <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
                Add Course
              </h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={(e)=>{setCourseName(e.target.value)}}
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Certified Blockchain Associate"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Course Type
                </label>
                <select
                  id="type"
                  name="type"
                  onChange={(e)=>{setCourseType(e.target.value)}}
                  className="border rounded w-full py-2 px-3"
                  required
                >
                  <option value="Self-Paced">Self-Paced</option>
                  <option value="Instructor-Led">Instructor-Led</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  onChange={(e)=>{setDescription(e.target.value)}}
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Small description on the course"
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Price
                </label>
                <select
                  id="price"
                  name="price"
                  onChange={(e)=>{setPrice(e.target.value)}}
                  className="border rounded w-full py-2 px-3"
                  required
                >
                  <option value="5000">Rs.5000</option>
                  <option value="3500">Rs.3500</option>
                  <option value="15000">Rs.15000</option>
                </select>
              </div>

              <div>
                <button
                  className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Addcourse