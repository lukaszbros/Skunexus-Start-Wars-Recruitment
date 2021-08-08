import React from 'react';
import './PlanetEdit.css';
import { Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  InputGroup,
  InputGroupAddon,
  InputGroupText, 
  Input } from 'reactstrap';
import { useForm, Controller } from "react-hook-form";

const PlanetEdit = ({close, planet}) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
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
            <Controller
              name="name"
              control={control}
              defaultValue={planet.name}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}/>
            {errors.name && <span className="form_error">This field is required</span>}
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Rotation period</InputGroupText>
            </InputGroupAddon>
            <Controller
              name="rotation_period"
              control={control}
              defaultValue={planet.rotation_period}
              rules={{ required: true }}
              render={({ field }) => <Input type="number" {...field} />}/>
            {errors.rotation_period && <span className="form_error">This field is required</span>}
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Terrain</InputGroupText>
            </InputGroupAddon>
            <Controller
              name="terrain"
              control={control}
              defaultValue={planet.terrain}
              rules={{ required: true }}
              render={({ field }) => <Input type="select" {...field}>
              {planet.terrain.split(', ').map(terrain => <option key={terrain} value={terrain}>{terrain}</option>)}
            </Input>}/>
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