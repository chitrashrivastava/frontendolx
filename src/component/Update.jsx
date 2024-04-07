import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateUser } from '../component/store/actions/UserAction'; // Import your user actions



const UpdateProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    username: user?.username,
    email: user?.email,
    phone: user?.phone || '', // Assuming user.phone is available in the user object
    avatar: null, // Initialize avatar as null
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    if (e.target.name === 'avatar') {
      setFormData({ ...formData, avatar: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct form data
    const formDataToUpdate = new FormData();
    formDataToUpdate.append('name', formData.username);
    formDataToUpdate.append('email', formData.email);
    formDataToUpdate.append('phone', formData.phone);
    formDataToUpdate.append('avatar', formData.avatar);
    console.log(formDataToUpdate)
    dispatch(asyncUpdateUser(formDataToUpdate, user._id))
      .then((response) => {
        // Handle success if needed
        console.log('Profile updated successfully:', response);
      })
      .catch((error) => {
        // Handle error if needed
        console.error('Error updating user profile:', error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input for name */}
        <div>
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input type="text" id="name" name="name" value={formData?.username} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" name="email" value={formData?.email}     onChange={handleChange}
 className="w-full border rounded-md px-3 py-2 bg-gray-100" />
        </div>

        {/* Input for phone */}
        <div>
          <label htmlFor="phone" className="block text-gray-700">Phone:</label>
          <input type="text" id="phone" name="phone" value={formData?.phone} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label htmlFor="avatar" className="block text-gray-700">Avatar:</label>
          <input type="file" id="avatar" name="avatar" onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
        </div>

        {/* Submit button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
