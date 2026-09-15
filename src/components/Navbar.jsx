
import React from 'react'
import { NavLink } from 'react-router'
import { LogOut, ShoppingCart } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../features/authSlice';
const Navbar = () => {

  const dispatch = useDispatch();
  const loggingOut  = ()=>{
    localStorage.removeItem("logedInUser")
    dispatch(removeUser());
    toast.success("user loggedout successfully")
    
  }
  return (
    <nav className="w-full h-18 bg-white border-b border-gray-200 px-10 flex items-center justify-between">

      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Sky<span className="text-gray-500">mart</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-10">

        <NavLink
          to="/main"
          end
          className={({ isActive }) =>
            `relative py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'text-black'
                : 'text-gray-500 hover:text-black'
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/main/shop"
          className={({ isActive }) =>
            `relative py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'text-black'
                : 'text-gray-500 hover:text-black'
            }`
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/main/about"
          className={({ isActive }) =>
            `relative py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'text-black'
                : 'text-gray-500 hover:text-black'
            }`
          }
        >
          About
        </NavLink>

      </div>

      {/* User + Cart + Logout */}
      <div className="flex items-center gap-6">

        {/* User */}
        <div className="text-sm text-gray-600">
          Hey, <span className="font-semibold text-gray-900">Dev</span>
        </div>

        {/* Cart */}
        <button
          className="flex items-center gap-2 bg-black text-white
          px-5 py-2.5 rounded-xl text-sm font-medium
          hover:bg-gray-800 active:scale-95
          transition-all duration-200 shadow-sm"
        >
          <ShoppingCart size={17} />
          Cart
        </button>

        {/* Logout */}
        <button
          className="p-2 rounded-lg text-gray-500
          hover:bg-gray-100 hover:text-red-500
          transition-all duration-200"
          title="Logout"
        >
          <LogOut onClick={loggingOut} size={20} />
        </button>

      </div>

    </nav>
  )
}

export default Navbar

