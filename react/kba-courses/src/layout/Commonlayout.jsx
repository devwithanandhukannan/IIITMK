import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'

const Commonlayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Commonlayout