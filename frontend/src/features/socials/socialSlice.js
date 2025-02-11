import { createSlice } from "@reduxjs/toolkit";

const initialState={
    startup:"",
    github:"",
    email:"",
    youtube:"",
    linkedin:"",
    instagram:"",
    twitter:""
}
const socialSlice = createSlice({
    name:'socials',
    initialState,
    reducers:{
        addStartuplink(state,action){
            state.startup=action.payload
        }
    }
})
export default socialSlice.reducer;
export const {addStartuplink} = socialSlice.actions;