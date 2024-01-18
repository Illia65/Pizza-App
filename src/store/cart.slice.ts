import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    count: number;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        delete: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            const existedIndex = state.items.findIndex(i => i.id === action.payload);

            if (existedIndex !== -1) {
                if (state.items[existedIndex].count === 1) {
                    state.items = state.items.filter(i => i.id !== action.payload);
                } else {
                    state.items[existedIndex].count -= 1;
                }
            }
        },
        add: (state, action: PayloadAction<number>) => {
            const existedIndex = state.items.findIndex(i => i.id === action.payload);

            if (existedIndex === -1) {
                state.items.push({ id: action.payload, count: 1 });
            } else {
                state.items[existedIndex].count += 1;
            }
        }
    }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
