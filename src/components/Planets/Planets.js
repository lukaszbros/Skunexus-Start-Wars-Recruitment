import './Planets.css';
import Grid from '../Grid';
import { useSelector } from 'react-redux';
import { selectAllPlanets } from './planetsReducer';
import { useHistory } from "react-router-dom";
import { Spinner } from 'reactstrap';

function Planets() {

  const planets = useSelector(selectAllPlanets);
  const status = useSelector(state => state.planets.status);
  const history = useHistory();

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
        action: (row) => {history.push(`/films/${row.name}`);}
      },
      {
        label: 'Go to Residents',
        action: (row) => { history.push(`/residents/${row.name}`);}
      },
      {
        label: 'Details',
        action: (row) => { history.push(`/planet/${row.name}`);}
      }
    ]
  }

  return (
    <div className='main_container'>
    <h1>Star Wars Planets</h1>
      {status === 'loading' && 
        <div>
          <Spinner color="dark" ></Spinner>
        </div>}
      {status === 'error' && 
        <h1>There was an error while fetching planets data</h1>}
      {status === 'succeeded' &&
        <Grid data={data} />}
    </div>
  );
}

export default Planets;
