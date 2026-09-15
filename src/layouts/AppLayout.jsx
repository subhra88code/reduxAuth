import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const AppLayout = () => {
  return (
    <div className='flex flex-col gap-2'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default AppLayout