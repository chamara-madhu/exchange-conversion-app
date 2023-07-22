import React from "react";
import { Button } from "react-bootstrap";

const CommonButton = ({
  label,
  size = "md",
  variant,
  cusClass = "",
  handleBtn,
}) => {
  return (
    <Button
      className={cusClass}
      onClick={handleBtn}
      size={size}
      variant={variant}
    >
      {label}
    </Button>
  );
};

export default CommonButton;
