import { createSlice } from '@reduxjs/toolkit';

const initialState={
    displayName:"",
    avatar:"https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-512.png",
    email:"",
    username:"",
    submit:false
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
        }
    }
})
export const {addUsername,addLogInCredentials} = userSlice.actions
export default userSlice.reducer;