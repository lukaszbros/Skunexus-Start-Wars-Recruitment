import { configureStore } from '@reduxjs/toolkit';
import planetsReducer from './components/Planets/planetsReducer';

export default configureStore({
  reducer: {
    planets: planetsReducer
  },
})