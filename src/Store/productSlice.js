import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    LOADING: 'Loading',
    ERROR: 'error'
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setProducts(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload
        },
    }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Thunks

// Thunk is a middleware. It is a function that returns a function.
// Thunk is called before the action is dispatched.

export const fetchProducts = () => {
    // since we are fetching data so the function will be asynchronous.
    // In the following function, we get 2 parameters, dispatch and getState.
    return async function fetchProductsThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data)); // Dispatch the action to set products
            dispatch(setStatus(STATUSES.IDLE)); // Set status to idle after fetching
        } catch (error) {
            console.error("Failed to fetch products:", error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}