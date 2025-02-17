import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:[],
    description:[],
    projectlink:[],
    repolink:[],
    status:[],
    image:[],
    techstack:[],
}

const projectSlice = createSlice({
    name:"project",
    initialState,
    reducers:{
        addProject(state,action){
            const {name,description,projectLink,repolink,status} = action.payload
            state.name.push(name)
            state.description.push(description)
            state.projectlink.push(projectLink)
            state.repolink.push(repolink)
            state.status.push(status)
        },
        addTechstack(state,action){
            state.techstack.push(action.payload)
        }
    }
})

export default projectSlice.reducer;
export const {addProject,addTechstack} = projectSlice.actions;