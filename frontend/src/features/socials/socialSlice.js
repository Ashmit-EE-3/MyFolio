import { createSlice } from "@reduxjs/toolkit";

const initialState={
    socials:{}
}
const socialSlice = createSlice({
    name:'socials',
    initialState,
    reducers:{
        addSocial(state,action){
            state.socials = action.payload  
        }
    }
})
export default socialSlice.reducer;
export const {addSocial} = socialSlice.actions;