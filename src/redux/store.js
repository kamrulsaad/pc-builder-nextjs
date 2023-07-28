import { configureStore } from '@reduxjs/toolkit'
import builderSlice from './app/buiderSlice'

export const store = configureStore({
    reducer: {
        builder: builderSlice.reducer,
    },
})