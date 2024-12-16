import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SignUser = async (e) => {
    e.preventDefault();
    let data = await fetch("http://localhost:5000/user/sign", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    let result = await data.json();
    if (result) {
      navigate("/login");
      alert("Successfully Signed Up");
      localStorage.setItem("User", JSON.stringify(result.result));
      localStorage.setItem('Token' , JSON.stringify(result.auth))
    } else {
      alert("error occurred");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-blue-400">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            New User
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
              type="submit"
              onClick={SignUser}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Already registered?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
