import './Planet.css';
import { useHistory } from "react-router-dom";
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllPlanets } from '../Planets/planetsReducer';
import { Button, ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';
import PlanetEdit from '../PlanetEdit';

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
  const [edit, setEdit] = useState(false);

  return (
    <div className="main_container">
      <h1>Details of {match.params.name}</h1>
      <Button onClick={ () => history.push("/") } color="primary">Back to planets</Button>
      {planet &&
      <Container>
        <Row>
        <Col>
          <ListGroup>
            <ListGroupItem><b>name:</b> {planet.name}</ListGroupItem>
            <ListGroupItem><b>rotation period:</b> {planet.rotation_period}</ListGroupItem>
            <ListGroupItem><b>orbital period:</b> {planet.orbital_period}</ListGroupItem>
            <ListGroupItem><b>diameter:</b> {planet.diameter}</ListGroupItem>
            <ListGroupItem><b>climate:</b> {planet.climate}</ListGroupItem>
            <ListGroupItem><b>gravity:</b> {planet.gravity}</ListGroupItem>
            <ListGroupItem><b>terrain:</b> {planet.terrain}</ListGroupItem>
            <ListGroupItem><b>surface water:</b> {planet.surface_water}</ListGroupItem>
            <ListGroupItem><b>population:</b> {planet.population}</ListGroupItem>
            {planet.films.length > 0 &&
              <ListGroupItem><Button onClick={ () => history.push(`/films/${planet.name}`) } color="primary">Go to Films</Button></ListGroupItem>}
            {planet.residents.length > 0 &&
              <ListGroupItem><Button onClick={ () => history.push(`/residents/${planet.name}`) } color="primary">Go to Residents</Button></ListGroupItem>}
            <ListGroupItem><Button onClick={ () => setEdit(true) } color="primary">Edit</Button></ListGroupItem>
          </ListGroup>
        </Col>
        </Row>
      </Container>}
      {edit && 
        <PlanetEdit close={() => setEdit(false)} planet={planet}></PlanetEdit>}
    </div>
  );
}

export default Planet;
