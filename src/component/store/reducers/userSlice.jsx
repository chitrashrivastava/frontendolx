import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuth: false
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
        }
    }
});

export const { saveUser ,removeUser} = userSlice.actions;

export default userSlice.reducer;
