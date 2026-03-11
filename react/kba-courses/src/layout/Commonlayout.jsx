import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Commonlayout = () => {
  return (
    <>
    <Navbar/>
      <ToastContainer position="top-right" autoClose={3000} />
    <Outlet/>
    </>
  )
}

export default Commonlayout