import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate=useNavigate()
  const { user, isAuth } = useSelector((state) => state.user);
  const handleUpdate=()=>{
    navigate('/update')
  }
  const handleDelete=()=>{
    
  }
  return (
    <>
      {isAuth ? (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome, {user.username}
            </h1>
            <p className="text-gray-600 mb-4">Email: {user.email}</p>
            <img
              src={user.avatar.url}
              alt="User Avatar"
              className="w-48 h-48 rounded-full mx-auto mb-4"
            />
          </div>
          <div className="btn flex gap-[10px] w-full justify-evenly ">
          <button className="bg-blue-400 p-3 text-white rounded-[10px]" onClick={handleUpdate}>
            Update
          </button>
          <button className="bg-red-400 p-3 text-white rounded-[10px]" onClick={handleDelete}>
            Delete
          </button>
          </div>
          
        </div>
      ) : (
        <p className="text-center text-gray-600">Please login to view your profile.</p>
      )}
    </>
  );
};

export default Profile;