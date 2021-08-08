import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundPage from '../components/utils/NotFoundPage';
import Planets from '../components/Planets';
import Planet from '../components/Planet';
import Films from '../components/Films';
import Residents from '../components/Residents';
import { useEffect, useState } from 'react';
import { fetchPlanets } from '../components/Planets/planetsReducer';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'reactstrap';

const Router = () => {

  const dispatch = useDispatch();
  const status = useSelector(state => state.planets.status);

  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlanets())
    }
  }, [status, dispatch]);

  return (
    <div>
    <Alert color="info" isOpen={visible} toggle={onDismiss}>
      I am an alert and I can be dismissed!
    </Alert>
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Planets} />
              <Route exact path='/planet/:name' component={Planet} />
              <Route exact path='/films/:name?' component={Films} />
              <Route exact path='/residents/:name' component={Residents} />
              <Route component={NotFoundPage} />
          </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
