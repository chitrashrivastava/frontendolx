import { useState } from 'react';
import './App.css';
import Nav from './component/Nav';
import Nav1 from './component/Nav1';
import { Route, Routes } from 'react-router-dom';
import SellItem from './component/SellItem';
import Login from './component/login';
import Register from './component/register';
import Profile from './component/profile';
import UpdateProfile from './component/Update';
import Productup from './component/prodctup'; // Sahi path ke saath import statement
import Cars from './component/Cars';
import Motorcycle from './component/Motorcycle';
import Scooters from './component/Scooters';
import Mobile from './component/Mobile';
import House from './component/House';
import Notfound from './component/Notfound';
import Showcart from './component/Showcart';


function App() {
  
  return (
    <>
    <Nav/>
    <Nav1/>
    <Routes>
      <Route path='/sell-items' element={<Productup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/update' element={<UpdateProfile/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/motorcycle' element={<Motorcycle/>}/>
      <Route path='/scooters' element={<Scooters/>}/>
      <Route path='/mobile' element={<Mobile/>}/>
      <Route path='/houses' element={<House/>}/>
      <Route path='/showcart' element={<Showcart/>}/>

       <Route path='*' element={<Notfound/>} /> 

      
    
    </Routes>
    </>
  );
}

export default App;
