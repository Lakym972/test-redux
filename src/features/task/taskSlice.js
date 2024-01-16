import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [{
        id:0,
        title: "Aucune tâche",
    }],
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers:{
        addTask: (state, action) => {
            state.tasks = []
            state.tasks.push(action.payload)
        }
    }
})

export const {addTask} = taskSlice.actions;

export default taskSlice.reducer;