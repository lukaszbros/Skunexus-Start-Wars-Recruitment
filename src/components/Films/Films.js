import './Films.css';
import Grid from '../Grid';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllFilms, fetchFilms } from './filmsReducer';
import { selectAllPlanets } from '../Planets/planetsReducer';
import { useHistory } from "react-router-dom";

function Films({match}) {

  const dispatch = useDispatch();
  const films = useSelector(selectAllFilms);
  const status = useSelector(state => state.films.status);
  const history = useHistory();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFilms());
    }
  }, [status, dispatch]);

  const planets = useSelector(selectAllPlanets);
  const planetFilms = useMemo(() => {
    if (planets && planets.length > 0 && match.params.name) {
      const planet = planets.find(planet => planet.name === match.params.name);
      if (planet) {
        return planet.films;
      }
    }
  }, [planets, match.params.name]);


  const data = {
    header: [
      'title',
      'episode_id',
      'director',
      'producer',
      'release_date'
    ],
    values: films.filter(film => planetFilms.includes(film.url)), 
    actions: []
  }

  return (
    <div className='Films'>
    <h1>Star Wars Films {match.params.name ? 'on ' + match.params.name : '' } </h1>
    <button onClick={ () => history.push("/") }>Back to planets</button>
    {status === 'loading' && 
        <h1>loading...</h1>}
      {status === 'error' && 
        <h1>There was an error while fetching films data</h1>}
    {status === 'succeeded' &&
        <Grid data={data} />}
    </div>
  );
}

export default Films;
