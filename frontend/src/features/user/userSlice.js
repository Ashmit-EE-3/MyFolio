import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: {
        displayName: "",
        avatar: "https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-512.png",
        email: "",
    },
    username: "",
    submit: false,
    location: "",
    skills: [],
    pdfFile:null,
    pdfName:""
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addLogInCredentials(state, action) {
            state.currentUser = {
                displayName: action.payload.displayName || "",
                avatar : action.payload.photoURL || "https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-512.png",
                email : action.payload.email || ""
            }
        },
        logOutUser(state) {
            state.currentUser = {
                displayName: "",
                avatar: "https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-512.png",
                email : ""
            }
        },
        addUsername(state, action) {
            state.username = action.payload,
                state.submit = true
        },
        addLocation(state, action) {
            state.location = action.payload
        },
        addSkills(state, action) {
            if(!state.skills.includes(action.payload))
            state.skills.push(action.payload);
        },
        addPdf(state,action){
            state.pdfFile=action.payload.file
            state.pdfName=action.payload.name
        }
    }
})
export const { addUsername, addLogInCredentials, logOutUser, addLocation, addSkills,addPdf} = userSlice.actions
export default userSlice.reducer;