import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncfetchProduct } from './store/actions/UserAction';

const Cars = () => {
  const { Product } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncfetchProduct("cars"));
  }, [dispatch]);

  // Handle initial render when Product is undefined or not an array
  if (!Array.isArray(Product)) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Product.map((data, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white">
            <img src={data.image.url} alt="" className="w-full h-56 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{data.productname}</h2>
              <p className="text-gray-700 mb-2">${data.price}</p>
              <p className="text-gray-700">{data.description}</p>
            </div>
            <div className="p-4 bg-gray-100">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
