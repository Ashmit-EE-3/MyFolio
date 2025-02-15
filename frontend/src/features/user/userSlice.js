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
    languages: [],
    skills:[],
    pdfFile:null,
    pdfName:"",
    isAuthenticated: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addLogInCredentials(state, action) {
            state.isAuthenticated = true
            state.currentUser = {
                displayName: action.payload.displayName || "",
                avatar : action.payload.photoURL || "https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-512.png",
                email : action.payload.email || ""
            }
        },
        logOutUser(state) {
            state.isAuthenticated = false ; 
            state.currentUser = {
                displayName: "",
                avatar: "https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/user-512.png",
                email : ""
            }
        },
        deleteUser(state){
            state.isAuthenticated = false 
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
        addLanguages(state, action) {
            if(!state.languages.includes(action.payload))
            state.languages.push(action.payload);
        },
        addPdf(state,action){
            state.pdfFile=action.payload.file
            state.pdfName=action.payload.name
        },
        addSkills(state,action){
            state.skills.push(action.payload)
        }
    }
})
export const { addUsername, addLogInCredentials, logOutUser, addLocation, addLanguages,addPdf,addSkills,deleteUser} = userSlice.actions
export default userSlice.reducer;