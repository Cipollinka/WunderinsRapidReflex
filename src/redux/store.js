import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import balanceReducer from './slices/balanceSlice';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import levelsReducer from './slices/levelsSlice';
import settingsReducer from './slices/settingsSlice';

const rootReducer = combineReducers({
  balance: balanceReducer,
  levels: levelsReducer,
  settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
