import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Analytics() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    UserData();
  },[])
 
  const UserData = async () => {
    let result = await fetch("http://localhost:5000/allUser");
    result = await result.json();
    setData(result);
  };
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">User Data</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  #
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Email
                </th>
        
              </tr>
            </thead>
            <tbody>
              {data.map((item , index) => (
                <tr
                  key={item._id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.email}
                  </td>
                 <td className="border border-gray-300 px-4 py-2">
                 <button>
                        <Link to={"/updateProfile/" +item._id}>
                        <img src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-black-edit-icon-image_1130448.jpg" alt="update" className="h-20 w-20" />
                        </Link>
                      </button>
                 </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
