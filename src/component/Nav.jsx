import { Link, useNavigate } from "react-router-dom";
import { MdSearch } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { asyncremoveUser } from "./store/actions/UserAction";

const Nav = () => {
  const navigate=useNavigate()
  const {isAuth,user}=useSelector((state)=>state.user)
  console.log(isAuth)
  const dispatch=useDispatch()
  const sellItems=()=>{
    navigate('/sell-items')

  }
  const handleLogout=(e)=>{
    e.preventDefault()
  dispatch(asyncremoveUser())
  }
  return (
    <div className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">OLX</h1>
        <div className="flex items-center">
          <div className="relative">
            <input type="text" placeholder="Search for items..." className="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-white focus:text-gray-900" />
            <button className="absolute right-0 top-0 bottom-0 bg-gray-800 rounded-md flex items-center justify-center">
              <MdSearch className="h-5 w-5 text-white" />
            </button>
          </div>
          <div className="ml-4">
          {isAuth ? (
              <button className="text-white" onClick={handleLogout}>Logout</button>
            ) : (
              <Link to="/login" className="text-white">Login</Link>
            )}
          </div>
          
  
          <button className="ml-4 bg-green-500 text-white px-4 py-2 rounded-md" onClick={sellItems}>Sell</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
