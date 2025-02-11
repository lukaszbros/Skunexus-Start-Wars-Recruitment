import './Planets.css';
import Grid from '../utils/Grid';
import { useSelector } from 'react-redux';
import { selectAllPlanets } from './planetsReducer';
import { useHistory } from "react-router-dom";
import { Spinner } from 'reactstrap';
import { useState } from 'react';
import PlanetEdit from '../PlanetEdit';
import PropTypes from 'prop-types';

function Planets({extended}) {

  const planets = useSelector(selectAllPlanets);
  const status = useSelector(state => state.planets.status);
  const history = useHistory();
  const [edit, setEdit] = useState(false);
  const [editPlanet, setEditPlanet] = useState();
  const close = () => {
    setEdit(false);
    setEditPlanet(undefined);
  }

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
      'population',
      ...extended ? ['films', 'residents'] : [],
    ],
    types: [
      'text',
      'number',
      'number',
      'number',
      'text',
      'text',
      'list',
      'text',
      'text',
      ...extended ? ['count', 'count'] : [],
    ],
    values: planets,
    actions: [
      {
        label: 'Go to Films',
        action: (row) => history.push(`/films/${row.name}`),
        hide: (row) => row.films.length === 0
      },
      {
        label: 'Go to Residents',
        action: (row) => history.push(`/residents/${row.name}`),
        hide: (row) => row.residents.length === 0 
      },
      {
        label: 'Details',
        action: (row) => history.push(`/planet/${row.name}`)
      },
      {
        label: 'Edit',
        action: (row) => {
          setEditPlanet(row); 
          setEdit(true);
        }
      }
    ]
  };


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
      {edit && 
        <PlanetEdit close={close} planet={editPlanet}></PlanetEdit>}
    </div>
  );
}

Planets.propTypes = {
  extended: PropTypes.bool
}

export default Planets;
