import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundPage from '../components/utils/NotFoundPage';
import Planets from '../components/Planets';
import Planet from '../components/Planet';
import Films from '../components/Films';
import Residents from '../components/Residents';
import App from '../components/App';

const Router = () => {

  return (
    <App>
      <BrowserRouter>
          <Switch>
              <Route exact path='/' render={(props) => (
                <Planets {...props} extended={true} />
              )} />
              <Route exact path='/planet/:name' component={Planet} />
              <Route exact path='/films/:name?' component={Films} />
              <Route exact path='/residents/:name' component={Residents} />
              <Route component={NotFoundPage} />
          </Switch>
      </BrowserRouter>
    </App>
  );
};

export default Router;
