import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const CART_PERSISTENT_STATE = '  cartData';

export interface CartItem {
    id: number;
    count: number;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = loadState<CartState>(CART_PERSISTENT_STATE) ?? {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clean: (state) => {
            state.items = []
        },
        delete: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            const existedIndex = state.items.findIndex(i => i.id === action.payload);

            if (existedIndex !== -1) {
                if (state.items[existedIndex].count === 1) {
                    state.items = state.items.filter(i => i.id !== action.payload)
                } else {
                    state.items[existedIndex].count -= 1
                }
            }
        },
        add: (state, action: PayloadAction<number>) => {
            const existedIndex = state.items.findIndex(i => i.id === action.payload);

            if (existedIndex === -1) {
                state.items.push({ id: action.payload, count: 1 });
            } else {
                state.items[existedIndex].count += 1
            }
        }
    }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
