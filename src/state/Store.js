import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit'

import dateSlice from './reducer/dateSlice'

const Store = configureStore({
    reducer:{
        date:dateSlice.reducer
    },
})
export default Store;