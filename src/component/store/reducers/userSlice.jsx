import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuth: false,
    Product:[],
    // arry of object
    info:[],


};

export const userSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        saveUser: (state, action) => {
            console.log(action.payload)
            state.user = action.payload;
            state.isAuth = true;
        },
        removeUser:(state,action)=>{
            state.user=null
            state.isAuth=false
        },
        saveProduct:(state,action) =>{
            console.log(action.payload)
         state.Product = action.payload
        },
        infodata:(state,action) =>{
         state.info = action.payload
         console.log(action.payload)
        //  info bala us componennt 

        }
    }
});

export const { saveUser ,removeUser,saveProduct,infodata} = userSlice.actions;

export default userSlice.reducer;
