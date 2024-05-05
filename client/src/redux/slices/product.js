import {createSlice} from '@reduxjs/toolkit'


export const initialState = {
    products: [],
    loading: false,
    error: null,
    product: null,
    pagination: {},
    favouritesToggled: true,

};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setProducts: (state, {payload}) => {
            state.loading=false;
            state.error=null;
            state.products=payload;
        },
        setError: (state, {payload}) => {
            state.loading=false;
            state.error=payload;
        },
        setPagination: (state, {payload}) => {
            state.loading=false;
            state.error=null;
            state.pagination=payload;
        },
        
    },
});
export const{setLoading,setProducts,
    setError,setPagination}
    =productSlice.actions;

export default productSlice.reducer;

export const productSelector = (state) => state.product;
