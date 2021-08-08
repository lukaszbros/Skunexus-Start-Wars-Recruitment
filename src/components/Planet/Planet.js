import './Planet.css';
import { useHistory } from "react-router-dom";
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectAllPlanets } from '../Planets/planetsReducer';
import { Button, ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';

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
    <div class="main_container">
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
            <ListGroupItem><Button onClick={ () => history.push(`/films/${planet.name}`) } color="primary">Go to Films</Button></ListGroupItem>
            <ListGroupItem><Button onClick={ () => history.push(`/residents/${planet.name}`) } color="primary">Go to Residents</Button></ListGroupItem>
          </ListGroup>
        </Col>
        </Row>
      </Container>}
    </div>
  );
}

export default Planet;
