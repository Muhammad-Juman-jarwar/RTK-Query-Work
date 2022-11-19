import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { yarriCall } from '../slices/apiSlice';

const store = configureStore({
    reducer: {
        [yarriCall.reducerPath ]: yarriCall.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(yarriCall.middleware),
})

setupListeners(store.dispatch);

export default store;