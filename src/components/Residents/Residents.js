import './Residents.css';
import Grid from '../Grid';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllResidents, fetchResidents } from './residentsReducer';
import { selectAllPlanets } from '../Planets/planetsReducer';
import { useHistory } from "react-router-dom";
import { Button, Spinner } from 'reactstrap';

function Residents({match}) {

  const dispatch = useDispatch();
  const residents = useSelector(selectAllResidents);
  const status = useSelector(state => state.residents.status);
  const history = useHistory();
  const planets = useSelector(selectAllPlanets);
  const planetResidents = useMemo(() => {
    if (planets && planets.length > 0 && match.params.name) {
      const planet = planets.find(planet => planet.name === match.params.name);
      if (planet) {
        return planet.residents;
      }
    }
  }, [planets, match.params.name]);

  useEffect(() => {
    if (planetResidents) {
      dispatch(fetchResidents(planetResidents));
    }
  }, [dispatch, planetResidents]);

  


  const data = {
    header: [
      'name',
      'height',
      'mass',
      'hair_color',
      'skin_color',
      'eye_color',
      'birth_year',
      'gender',
    ],
    values: residents, 
    actions: []
  }

  return (
    <div className='main_container'>
    <h1>Star Wars Residents {match.params.name ? 'on ' + match.params.name : '' } </h1>
    <Button onClick={ () => history.push("/") } color="primary">Back to planets</Button>
    {status === 'loading' && 
        <div>
          <Spinner color="dark" ></Spinner>
        </div>}
      {status === 'error' && 
        <h1>There was an error while fetching films data</h1>}
      {status === 'succeeded' &&
          <Grid data={data} />}
    </div>
  );
}

export default Residents;
