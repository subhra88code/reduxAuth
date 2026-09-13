import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../features/authSlice';

const Home = () => {
  const dispatch = useDispatch();
  const loggingOut  = ()=>{
    localStorage.removeItem("logedInUser")
    dispatch(removeUser());
    toast.success("user loggedout successfully")
    
  }
  return (
    <div>Home
      <button onClick={loggingOut}>LogOut</button>
    </div>
  )
}

export default Home