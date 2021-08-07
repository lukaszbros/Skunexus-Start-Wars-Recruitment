import './Planets.css';
import Grid from '../Grid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPlanets, fetchPlanets } from './planetsReducer';

function Planets() {

  const dispatch = useDispatch();
  const planets = useSelector(selectAllPlanets);
  const status = useSelector(state => state.planets.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlanets())
    }
  }, [status, dispatch]);

  const data = {
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population'
    ],
    values: planets,
    actions: [
      {
        label: 'Go to Films',
        action: (row) => { console.log(`redirect to grid with ${row.films.length} Films`)}
      },
      {
        label: 'Go to Residents',
        action: (row) => { console.log(`redirect to grid with ${row.residents.length} Residents`)}
      }
    ]
  }

  return (
    <div className='Planets'>
    <h1>Star Wars Planets</h1>
      {status === 'loading' && 
        <h1>loading...</h1>}
      {status === 'error' && 
        <h1>There was an error while fetching planets data</h1>}
      {status === 'succeeded' &&
        <Grid data={data} />}
    </div>
  );
}

export default Planets;
