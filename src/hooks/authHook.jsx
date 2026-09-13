import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { store } from "../app/store";
import { addUser } from "../features/authSlice";
export const auth = () => {
  let dispatch = useDispatch()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [registerUser, setregisterUser] = useState(JSON.parse(localStorage.getItem("regiserUser")) || [])

  const registerFrom = (data)=>{
    console.log(data);
    let arr = [...registerUser,data];
    setregisterUser(arr);
    localStorage.setItem("regiserUser",JSON.stringify(arr));
    reset()
    navigate('/')
  }
  const loginForm = (data)=>{
    console.log(data);
    let user = registerUser.find((item) => {
        return data.email === item.email && data.password === item.password
    })

    if(!user){
        toast.error("invalid something...");
        reset();
        return
    }
    dispatch(addUser(user))
    localStorage.setItem("logedInUser",JSON.stringify(user));
    toast.success("user logedin")
    reset();
  }

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    reset,
    registerFrom,
    loginForm
  };
};
