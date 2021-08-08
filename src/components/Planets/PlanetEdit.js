import React from 'react';
import './PlanetEdit.css';
import { Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  InputGroup,
  InputGroupAddon,
  InputGroupText } from 'reactstrap';
import { useForm } from "react-hook-form";

const PlanetEdit = ({close, planet}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });
  const onSubmit = (data) => console.log(JSON.stringify(data));

  return (
    <div>
      <Modal isOpen={true} toggle={close}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Edit {planet.name}</ModalHeader>
        <ModalBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Name</InputGroupText>
            </InputGroupAddon>
            <input {...register("name", { required: true })} defaultValue={planet.name}/>
            {errors.name && <span className="form_error">This field is required</span>}
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Rotation period</InputGroupText>
            </InputGroupAddon>
            <input type="number" {...register("rotation_period", { required: true })} defaultValue={planet.rotation_period}/>
            {errors.rotation_period && <span className="form_error">This field is required</span>}
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Terrain</InputGroupText>
            </InputGroupAddon>
            <select {...register("terrain", { required: true })}>
              {planet.terrain.split(',').map(terrain => <option key={terrain} value={terrain}>{terrain}</option>)}
            </select>
            {errors.terrain && <span className="form_error">This field is required</span>}
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary">Save</Button>
          <Button color="secondary" onClick={close}>Cancel</Button>
        </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}

export default PlanetEdit;