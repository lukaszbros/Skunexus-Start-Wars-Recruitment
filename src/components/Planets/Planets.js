import './Planets.css';
import Grid from '../Grid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPlanets, fetchPlanets } from './planetsReducer';

function Planets() {

  const dispatch = useDispatch();
  const planets = useSelector(selectAllPlanets);
  const postStatus = useSelector(state => state.planets.status);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPlanets())
    }
  }, [postStatus, dispatch]);

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
    <div className='App'>
      <h1>{postStatus}</h1>
      <Grid data={data} />
    </div>
  );
}

export default Planets;
