import React, { memo } from "react";
import { Form } from "react-bootstrap";

const TextField = ({
  label,
  type = "text",
  name,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <Form.Group controlId="formBasicEmail">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default memo(TextField);
