import React, { useEffect } from 'react'
 import {useDispatch,useSelector} from 'react-redux'
import { asyncfetchProduct } from './store/actions/UserAction'
 

const Cars = () => {
 const stt = useSelector((state)=>state)
 console.log(stt)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch( asyncfetchProduct("cars")) 

    },[dispatch])
  return (
    <div>Cars</div>
  )
}

export default Cars