import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CategoryState {
    category: string;
}

const initialState: CategoryState = {
    category: ''
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory(state, action: PayloadAction<string>) {
            state.category = action.payload
        },
    },
})

export default categorySlice.reducer;