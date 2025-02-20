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
    }
})

export default projectSlice.reducer;
export const { addProject } = projectSlice.actions;