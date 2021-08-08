import React from 'react';
import { useEffect } from 'react';
import { clearAlert } from './appReducer';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'reactstrap';
import { fetchPlanets } from '../Planets/planetsReducer';

function App({children}) {

  const dispatch = useDispatch();
  const status = useSelector(state => state.planets.status);
  const error = useSelector(state => state.app.alertText);
  const type = useSelector(state => state.app.alertType);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlanets());
    }
  }, [status, dispatch]);

  return (
  <div>
    {error && <Alert color={type} isOpen={true} toggle={() => dispatch(clearAlert())}>
      {error}!
    </Alert>}
    <div>{children}</div>
  </div>);
}

export default App;