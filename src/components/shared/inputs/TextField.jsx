import React, { memo } from "react";
import { Form } from "react-bootstrap";

const TextField = ({
  id = "",
  label,
  type = "text",
  name,
  value,
  placeholder,
  handleChange,
  min,
  max,
}) => {
  return (
    <Form.Group controlId={id}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        min={min}
        max={max}
      />
    </Form.Group>
  );
};

export default memo(TextField);
