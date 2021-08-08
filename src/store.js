import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './components/Films/filmsReducer';
import planetsReducer  from './components/Planets/planetsReducer';
import residentsReducer  from './components/Residents/residentsReducer';
import appReducer  from './components/App/appReducer';

export default configureStore({
  reducer: {
    planets: planetsReducer, 
    films: filmsReducer,
    residents: residentsReducer,
    app: appReducer
  },
})