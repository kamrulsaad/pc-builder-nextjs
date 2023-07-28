import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const builderSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products.push(action.payload)
        }
    },
})

export const {setProduct } = builderSlice.actions

export default builderSlice