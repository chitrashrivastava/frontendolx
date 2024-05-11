import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cartfetch } from './store/actions/UserAction';

const Showcart = () => {
  const { user } = useSelector((state) => state.user);
  const { info } = useSelector((state) => state.user);
  console.log(info)
  const dispatch = useDispatch();

  

  useEffect(() => {
    if (user) {
      dispatch(Cartfetch(user._id));
    }
  }, [user._id, dispatch]);

  return (
    <div>
      {info && info?.map((item, index) => (
        <div key={index}>
          <p>Product ID: {item.productid && item.productid._id}</p>
          <p>Product Name: {item.productid && item.productid.productname}</p>
          <p>Price: {item.productid && item.productid.price}</p>
          <p>User ID: {item.userid && item.userid._id}</p>
          <p>Username: {item.userid && item.userid.username}</p>
          <p>Email: {item.userid && item.userid.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Showcart;
