import { configureStore } from '@reduxjs/toolkit';
import myMiddleware from './middleware';

import rootReducer from './reducers';
import ApiHandler from '../service/ApiHandler';

export const useApi = new ApiHandler();


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware)
});

