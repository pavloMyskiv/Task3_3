import { rootReducer as reducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer });

export default store;
