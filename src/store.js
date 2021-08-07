import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './components/Films/filmsReducer';
import planetsReducer  from './components/Planets/planetsReducer';

export default configureStore({
  reducer: {
    planets: planetsReducer, 
    films: filmsReducer
  },
})