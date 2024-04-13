import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuth: false,
    Product:[]

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
        }
    }
});

export const { saveUser ,removeUser,saveProduct} = userSlice.actions;

export default userSlice.reducer;
