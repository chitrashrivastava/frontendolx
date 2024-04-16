import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncUpdateUser,asyncUploadItem } from '../component/store/actions/UserAction'; // Import your user actions

const Productup = () => {
  const dispatch = useDispatch();
  
  // Initialize form state with empty values
  const [formData, setFormData] = useState({
    productname: '',
    price: '',
    description: '',
    image: null, // Initialize image as null
    category: '' // Initialize category
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct form data
    const formDataToUpdate = new FormData();
    formDataToUpdate.append('productname', formData.productname);
    formDataToUpdate.append('price', formData.price);
    formDataToUpdate.append('description', formData.description);
    formDataToUpdate.append('image', formData.image);
    formDataToUpdate.append('category', formData.category); // Append category
    
    
    dispatch( asyncUploadItem(formDataToUpdate))
      .then((response) => {
        // Handle success if needed
        console.log('Product updated successfully:', response);
      })
      .catch((error) => {
        // Handle error if needed
        console.error('Error updating product:', error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input for product name */}
        <div>
          <label htmlFor="productname" className="block text-gray-700">Product Name:</label>
          <input type="text" id="productname" name="productname" value={formData.productname} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
        </div>

        {/* Input for price */}
        <div>
          <label htmlFor="price" className="block text-gray-700">Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
        </div>

        {/* Input for description */}
        <div>
          <label htmlFor="description" className="block text-gray-700">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
        </div>

        {/* Input for image */}
        <div>
          <label htmlFor="image" className="block text-gray-700">Image:</label>
          <input type="file" id="image" name="image" onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
        </div>

        {/* Select input for category */}
        <div>
          <label htmlFor="category" className="block text-gray-700">Category:</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500">
            <option value="">Select Category</option>
            <option value="cars">Cars</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="mobile">Mobile </option>
            <option value="house">House</option>
            <option value="scooters">Scooters</option>
          </select>
        </div>

        {/* Submit button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Product</button>
      </form>
    </div>
  );
};

export default Productup;
