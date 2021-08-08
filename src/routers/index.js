import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Planets from '../components/Planets';
import Planet from '../components/Planet';
import Films from '../components/Films';
import Residents from '../components/Residents';
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
              <Route exact path='/planet/:name' component={Planet} />
              <Route exact path='/films/:name?' component={Films} />
              <Route exact path='/residents/:name' component={Residents} />
              <Route component={NotFoundPage} />
          </Switch>
      </BrowserRouter>
  );
};

export default Router;
