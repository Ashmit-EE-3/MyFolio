import { createSlice } from '@reduxjs/toolkit';

const initialState={
    displayName:"",
    avatar:"https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-512.png",
    email:"",
    username:"",
    submit:false,
    location:"",
    revenue:0
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addLogInCredentials(state,action){
            state.displayName=action.payload.displayName,
            state.avatar=action.payload.photoURL,
            state.email=action.payload.email
        },
        addUsername(state,action){
            state.username=action.payload,
            state.submit=true
        },
        addLocation(state,action){
            state.location=action.payload
        },
        addRevenue(state,action)
        {
            state.revenue=action.payload
        }
    }
})
export const {addUsername,addLogInCredentials,addLocation,addRevenue} = userSlice.actions
export default userSlice.reducer;