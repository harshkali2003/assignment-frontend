import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LogUser() {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate()

  const LogUser =async (e)=>{
    e.preventDefault()
    let data = await fetch('http://localhost:5000/user/log' , {
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{"Content-Type" : "application/json"}
    })
    let result = await data.json()
    if(result){
      navigate('/')
      alert("Successfully Logged In")
      localStorage.setItem('User' , JSON.stringify(result.data))
      localStorage.setItem("Token" ,JSON.stringify(result.auth))
    }else{
      alert("error occurred")
    }
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-blue-400">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome User</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              value={email} onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
              value={password} onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
         
          <button
            type="submit"
            onClick={LogUser}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <Link to="/sign" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}
