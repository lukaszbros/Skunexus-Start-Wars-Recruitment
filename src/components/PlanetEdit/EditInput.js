import React from 'react';
import {  
  InputGroup,
  InputGroupAddon,
  InputGroupText, 
  Input } from 'reactstrap';
import { Controller } from "react-hook-form";

const EditInput = ({type, label, name, value, control, errors, children}) => {

  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>{label}</InputGroupText>
      </InputGroupAddon>
      <Controller
        name={name}
        control={control}
        defaultValue={value}
        rules={{ required: true }}
        render={({ field }) => <Input type={type} {...field} >
          {children}
        </Input>}/>
      {errors && <span className="form_error">This field is required</span>}
    </InputGroup>
  );
}

export default EditInput;