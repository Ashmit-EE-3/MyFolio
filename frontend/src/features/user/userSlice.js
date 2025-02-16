import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: {},
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
            state.currentUser = action.payload 
        },
        logOutUser(state) {
            state.isAuthenticated = false ; 
            state.currentUser = {}
        },
        updateUser(state,action){
            state.currentUser = action.payload
        },
        deleteUser(state){
            state.isAuthenticated = false 
            state.currentUser = {}
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
export const { addUsername, addLogInCredentials, updateUser, logOutUser, addLocation, addLanguages,addPdf,addSkills,deleteUser} = userSlice.actions
export default userSlice.reducer;