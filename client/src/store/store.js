
import { configureStore } from '@reduxjs/toolkit';
import blogSlice from '../features/blogSlice';

const store = configureStore({
    reducer: {
        blogs: blogSlice,
    }
})

export default store;