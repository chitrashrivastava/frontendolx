import { removeUser, saveUser } from "../reducers/userSlice";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'

export const asyncCurrentUser = (token) => async (dispatch, getState) => {
    try {
        const response = await axios.post("/user");

        console.log(response)
        if (response && response.data && response.data.user) {
            dispatch(saveUser(response.data.user));
        } else {
            console.error('Invalid response format from server:', response.data);
        }
    
        return response.data;
    } catch (error) {
        console.error('Error fetching current user data:', error.response?.data || error.message);
        throw error;
    }
};

export const asyncsignupUser = (user) => async (dispatch, getState) => {
    try {
        console.log(user)
        await axios.post("/signup", user);
        dispatch(asyncCurrentUser());
        console.log(user)
    } catch (error) {
        console.log(error.response.data);
      
    }
};
export const asyncsigninUser = (user) => async (dispatch, getState) => {
    try {
        await axios.post("/login", user);
        dispatch(asyncCurrentUser());
        toast.success("Login Successful")
        return true; // Login successful
    } catch (error) {
        console.log(error.response.data);
        toast.error("Login failed. Please check your credentials.");
        return false; // Login failed
    }
};

export const asyncUpdateUser=(user,id)=>async(dispatch,getState)=>{
    try {
            console.log(user)
            const response = await axios.post(`/update/${id}`, user);
            dispatch(asyncCurrentUser());
            toast.success('Profile updated successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
    
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            toast.error('Error updating student profile!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            throw error;
        }
     
}

export const asyncUploadProduct=(product)=>async(dispatch,getState)=>{
    try {
            console.log(user)
            const response = await axios.post(`/uploadproduct`, product);
            dispatch(asyncCurrentUser());
            toast.success('Profile updated successfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            });
    
            return response.data;
        } catch (error) {
            console.log(error.response.data);
            toast.error('Error updating student profile!', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            throw error;
        }
     
}




export const asyncremoveUser= () => async (dispatch, getState) => {
    try {
        await axios.get("/logout");
        dispatch(removeUser());
        toast.success('Logout successful!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        });
    } catch (error) {
        console.log(error.response.data);
        toast.error('Error during logout!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }
};


export const asyncUploadItem=(data)=>async(dispatch,getState)=>{
    try{
        const response=await axios.post('/upload-item',data)
    }
    catch(err){
        console.log(err)
    }
}