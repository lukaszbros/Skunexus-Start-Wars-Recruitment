import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/App/counterReducer';
import planetsReducer from './components/Planets/planetsReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    planets: planetsReducer
  },
})