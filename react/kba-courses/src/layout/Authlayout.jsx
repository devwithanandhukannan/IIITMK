import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Authlayout = () => {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <Outlet/>
    </>
  )
}

export default Authlayout