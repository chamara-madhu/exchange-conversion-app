import React, { memo } from "react";
import { Form } from "react-bootstrap";

const Select = ({ id = "", label, name, value, handleChange, children }) => {
  return (
    <Form.Group controlId={id}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Select
        aria-label="Default select example"
        name={name}
        value={value}
        onChange={handleChange}
      >
        {children}
      </Form.Select>
    </Form.Group>
  );
};

export default memo(Select);
