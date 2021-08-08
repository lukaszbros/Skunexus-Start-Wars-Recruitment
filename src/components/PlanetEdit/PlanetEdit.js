import React from 'react';
import './PlanetEdit.css';
import { Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter } from 'reactstrap';
import { useForm } from "react-hook-form";
import EditInput from "../utils/EditInput/EditInput";
import { useDispatch } from 'react-redux';
import { planetEdit } from '../Planets/planetsReducer';

const PlanetEdit = ({close, planet}) => {
  const {handleSubmit, control, formState: { errors } } = useForm({
    mode: 'onBlur'
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(planetEdit(data));
    close();
  }

  return (
    <div>
      <Modal isOpen={true} toggle={close}>
      {planet &&
        <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Edit {planet.name}</ModalHeader>
        
        <ModalBody>
          <EditInput type="text" label="Name" name="name" value={planet.name} control={control} errors={errors.name}/>
          <br />
          <EditInput type="number" label="Rotation period" name="rotation_period" value={planet.rotation_period} control={control} errors={errors.rotation_period}/>
          <br />
          <EditInput type="number" label="Orbital period" name="orbital_period" value={planet.orbital_period} control={control} errors={errors.orbital_period}/>
          <br />
          <EditInput type="number" label="Diameter" name="diameter" value={planet.diameter} control={control} errors={errors.diameter}/>
          <br />
          <EditInput type="text" label="Climate" name="climate" value={planet.climate} control={control} errors={errors.climate}/>
          <br />
          <EditInput type="text" label="Gravity" name="gravity" value={planet.gravity} control={control} errors={errors.gravity}/>
          <br />
          <EditInput type="select" label="Terrain" name="terrain" value={planet.terrain} control={control} errors={errors.terrain}>
            {planet.terrain.split(', ').map(terrain => <option key={terrain} value={terrain}>{terrain}</option>)}
          </EditInput>
          <br />
          <EditInput type="number" label="Surface Water" name="surface_water" value={planet.surface_water} control={control} errors={errors.surface_water}/>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary">Save</Button>
          <Button color="secondary" onClick={close}>Cancel</Button>
        </ModalFooter>
        </form>}
      </Modal>
    </div>
  );
}

export default PlanetEdit;