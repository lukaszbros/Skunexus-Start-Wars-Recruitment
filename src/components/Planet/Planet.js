import './Planet.css';
import { useHistory } from "react-router-dom";
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectAllPlanets } from '../Planets/planetsReducer';
import { Button } from 'reactstrap';

function Planet({match}) {
  const history = useHistory();
  const planets = useSelector(selectAllPlanets);
  const planet = useMemo(() => {
    if (planets && planets.length > 0 && match.params.name) {
      const planet = planets.find(planet => planet.name === match.params.name);
      if (planet) {
        return planet;
      }
    }
  }, [planets, match.params.name]);

  return (
    <div className='Planets'>
      <Button onClick={ () => history.push("/") } color="primary">Back to planets</Button>
    </div>
  );
}

export default Planet;
