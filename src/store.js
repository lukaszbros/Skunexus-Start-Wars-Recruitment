import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './components/Films/filmsReducer';
import planetsReducer  from './components/Planets/planetsReducer';
import residentsReducer  from './components/Residents/residentsReducer';

export default configureStore({
  reducer: {
    planets: planetsReducer, 
    films: filmsReducer,
    residents: residentsReducer
  },
})