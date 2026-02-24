import React, { useState } from 'react'
import courseImage from '../assets/images/rp.png'
import courseData from '../data/courseDummy.json'

const CourseCard = () => {
  const [desc, setDesc] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState()
  console.log(expandedIndex);
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
      {courseData.map((val, index) => {
        const isExpanded = expandedIndex === index
        return (
          <div
            className='p-5 bg-purple-100 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'
            key={index}
          >
            <h2 className='font-bold text-lg text-purple-900'>{val.title}</h2>
            <img src={courseImage} alt="course thumbnail" className='w-80 h-40 object-cover' />

            <div
              className='overflow-hidden transition-all duration-500 ease-in-out bg-purple-200 rounded-xl text-black my-2 mx-5'
              style={{ maxHeight: isExpanded ? '500px' : '70px' }}
            >
              <p className='transition-all duration-500 ease-in-out text-black my-2 mx-5'>
                {isExpanded ? val.description : val.description.slice(0, 70) + '...'}
              </p>
            </div>

            <button
              className='self-end ml-3 px-3 py-1 rounded-full bg-gray-500 text-white'
              onClick={() => setExpandedIndex(isExpanded?'index':index)}
            >
              {isExpanded ? 'close' : 'show full desc'}
            </button>

            <a
              href="#"
              className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 self-start mx-5 mt-2'
            >
              Learn More
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default CourseCard