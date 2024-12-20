import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const params = useParams()

  useEffect(()=>{
    getUserDetails()
}, [])


  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:5000/user/${params.id}`);
    let result = await data.json();
    console.log(result);
    setName(result.name)
    setEmail(result.email)
    setPassword(result.password)
  };

  const updateRecord = async (e) => {
    e.preventDefault()
    let data = await fetch(`http://localhost:5000/user/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, email, password}),
      headers: { "Content-Type": "application/json" ,  authorization :`bearer ${JSON.parse(localStorage.getItem('Token'))}`  },
    });
    let result = await data.json();
    if (result) {
      navigate("/");
      alert("Record updated successfully");
    } else {
      alert("Error Occurred");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-blue-400">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Update Profile
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            

            <button
              onClick={updateRecord}
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
