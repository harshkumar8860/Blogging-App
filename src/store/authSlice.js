import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null,
}

const authService = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // actions
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        // actions
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

// create slice of post as assignment 

export const { login, logout } = authService.actions;

export default authService.reducer;