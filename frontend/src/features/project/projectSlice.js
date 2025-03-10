import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    project: []
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        addProject(state, action) {
            state.project.push(action.payload)
        },
        deleteProject(state,action){
            state.project=state.project.filter((project)=>
            project._id!==action.payload)
        },
        updateProject(state,action)
        {
            state.project=action.payload
        },
        addProjectLogin(state,action){
            state.project = action.payload
        },
        editProject(state,action){
            const index = state.project.findIndex((project)=>project._id===action.payload._id) ; 
            if (index!==-1){
                state.project[index] = action.payload ; 
            }
        }
    }
})

export default projectSlice.reducer;
export const { addProject, addProjectLogin, deleteProject, updateProject, editProject } = projectSlice.actions;
