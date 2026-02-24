import React from 'react'
import logo from '../assets/images/kbalogo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const navData = [
    { title: 'Home', link: '/' },
    { title: 'Courses', link: '/course' },
    { title: 'Contact', link: '/contact' },
    { title: 'Add course', link: '/add-course' },
    ]

    return (
        <nav>
            <div className='bg-purple-100 text-purple-950 grid grid-cols-1 md:grid-cols-2 p-3 shadow-md'>
                <div className='flex items-center'>
                    <a href="#" >
                        <img className='m-2 p-2 h-14 w-14' src={logo} alt="logo" />
                    </a>
                </div>
                <div className='flex justify-center md:justify-end items-center mt-2 md:mt-0 space-x-1 md:space-x-1'>
                    {navData.map((val, index) => {
                        return (
                            <Link key={index} to={val.link}>
                                {val.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar