import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//
import { rootReducer } from './rootReducer';

// ----------------------------------------------------------------------

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
});

const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();

export { store, useSelector, useDispatch };
