import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, asyncfetchProduct } from './store/actions/UserAction';

const Cars = () => {
  const { Product } = useSelector((state) => state.user);
  console.log(Product)
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.user)
  console.log(user)

  useEffect(() => {
    dispatch(asyncfetchProduct("cars"));
  }, [dispatch]);

  // Handle initial render when Product is undefined or not an array
  if (!Array.isArray(Product)) {
    return <div>Loading...</div>; // Or any other loading indicator
  }
   // Define cardfunc to add the selected product to the cart
  //  
   const cardfunc = (productid) => {
    dispatch(addToCart({productid,user:user._id})); // Dispatch action to add product to cart

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
            <button onClick={() => cardfunc(data._id)} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
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
