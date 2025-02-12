import { createSlice } from "@reduxjs/toolkit";

const initialState={
    socials:{}
}
const socialSlice = createSlice({
    name:'socials',
    initialState,
    reducers:{
        addStartuplink(state,action){
            state.startup=action.payload
        },
        addSocial(state,action){
            const {platform,link}=action.payload
            state.socials[platform]=link
        }
    }
})
export default socialSlice.reducer;
export const {addStartuplink,addSocial} = socialSlice.actions;