import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CategoryState {
    category: string;
    isLoading: boolean;
    error: string,
}

const initialState: CategoryState = {
    category: '',
    isLoading: false,
    error: '',
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory(state, action: PayloadAction<string>) {
            state.category = action.payload
        },
        usersFetching(state) {
            state.isLoading = true
        },
        usersFetchingSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = '';
            state.category = action.payload;
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
    },
})

export default categorySlice.reducer;