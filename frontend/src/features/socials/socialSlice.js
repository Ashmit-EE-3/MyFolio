import { createSlice } from "@reduxjs/toolkit";

const initialState={
    socials:{}
}
const socialSlice = createSlice({
    name:'socials',
    initialState,
    reducers:{
        addSocial(state,action){
            const {platform,link}=action.payload
            state.socials[platform]=link
        }
    }
})
export default socialSlice.reducer;
export const {addSocial} = socialSlice.actions;