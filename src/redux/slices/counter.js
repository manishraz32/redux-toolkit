import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 5,
}

export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
            return state;
        },
        decrement: (state) => { state.value = state.value - 1; return state},
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;