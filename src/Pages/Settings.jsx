import React from "react";
import { Link } from "react-router-dom";

export default function Settings() {
  const auth = localStorage.getItem('User')
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

          <div>
            <p className="mb-2">
              <strong>Name:{JSON.parse(auth).name}</strong>
            </p>
            <p className="mb-2">
              <strong>Email:{JSON.parse(auth).email}</strong>
            </p>
            

            <Link
              to="/updateProfile"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}