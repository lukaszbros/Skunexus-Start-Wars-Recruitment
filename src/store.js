import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/App/counterReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})