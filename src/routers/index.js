import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Planets from '../components/Planets';
import Films from '../components/Films';
import { useEffect } from 'react';
import { fetchPlanets } from '../components/Planets/planetsReducer';
import { useSelector, useDispatch } from 'react-redux';

const Router = () => {

  const dispatch = useDispatch();
  const status = useSelector(state => state.planets.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlanets())
    }
  }, [status, dispatch]);

  return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Planets} />
              <Route exact path='/films/:name?' component={Films} />
              <Route component={NotFoundPage} />
          </Switch>
      </BrowserRouter>
  );
};

export default Router;
