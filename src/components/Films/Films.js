import './Films.css';
import Grid from '../Grid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllFilms, fetchFilms } from './filmsReducer';
import { useHistory } from "react-router-dom";

function Films() {

  const dispatch = useDispatch();
  const films = useSelector(selectAllFilms);
  const status = useSelector(state => state.films.status);
  const history = useHistory();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFilms())
    }
  }, [status, dispatch]);

  const data = {
    header: [
      'title',
      'episode_id',
      'director',
      'producer',
      'release_date'
    ],
    values: films, 
    actions: []
  }

  return (
    <div className='Films'>
    <h1>Star Wars Films</h1>
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
