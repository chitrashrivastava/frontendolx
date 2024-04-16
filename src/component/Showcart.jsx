import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cartfetch } from './store/actions/UserAction'




const Showcart = () => {
 const {user } = useSelector((state)=>state.user)
 console.log(user)

    // hook ko return ke upr call krte h 
   const dispatch = useDispatch()
    useEffect( ()=>{
       dispatch(Cartfetch(user._id))
    },[user._id,dispatch])
    // [] dependecies jati h userid type 

  return (
    <div>Showcart</div>
  )
}

export default Showcart
