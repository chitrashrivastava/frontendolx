import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { asyncfetchProduct } from './store/actions/UserAction'



const Motorcycle = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch( asyncfetchProduct("motorcycle")) 
 
     },[dispatch])
  return (
    <div>Motorcycle</div>
  )
}

export default Motorcycle