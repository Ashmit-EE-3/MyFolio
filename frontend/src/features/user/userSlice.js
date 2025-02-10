import { createSlice } from '@reduxjs/toolkit';

const initialState={
    username:"",
    submit:false
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUsername(state,action){
            state.username=action.payload,
            state.submit=true
        }
    }
})
export const {addUsername} = userSlice.actions
export default userSlice.reducer;