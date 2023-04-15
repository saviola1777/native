
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
   name:"auth",
   initialState:{
      userId:null,
      nickName:null,
      stateChange:false,
   },
   
   reducers:{
      updateUserProfile:(state ,{payload})=>({
         ...state ,
         userId:payload.userId ,
         nickName:payload.nickName,
         stateChange: payload.stateChange,
      }),
      updateUserLogin:(state ,{payload})=>({
         ...state ,
         userId:payload.userId ,
         nickName:payload.nickName,
         stateChange: payload.stateChange,
      }),
      authStateChange:(state,{payload})=>({
         ...state,
         stateChange:payload.stateChange
      }) ,
      userLogout:(state)=>({
         ...state ,
         userId:null,
         nickName:null,
         stateChange: false
      }),

   }

})


export const { updateUserProfile} = authSlice.actions;
export const authReducer = authSlice.reducer;

// console.log("authSlice",authSlice)

