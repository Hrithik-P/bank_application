import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import bankReducer from './bank/bankReducer';



const reducers = combineReducers({
  bank: bankReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,

  middleware: [thunk],
});

export default store;

export const persistor = persistStore(store);