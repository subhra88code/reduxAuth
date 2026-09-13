import React from 'react'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Outlet/>
    </div>
  )
}

export default AppLayout