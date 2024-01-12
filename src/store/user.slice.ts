import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export const JWT_PERSISTENT_STATE = "userData"

export interface UserPersistentState {
    jwt: string | null
}
export interface userSate {
    jwt: string | null
}

const initialState: userSate = {
    jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addJwt: (state, actions: PayloadAction<string>) => {
            state.jwt = actions.payload
        },
        logout: (state) => {
            state.jwt = null
        }
    }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;