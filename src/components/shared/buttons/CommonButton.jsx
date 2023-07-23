import React from "react";
import { Button } from "react-bootstrap";

const CommonButton = ({
  label,
  size = "md",
  variant,
  cusClass = "",
  handleBtn,
  isDisabled = false,
}) => {
  return (
    <Button
      className={cusClass}
      onClick={handleBtn}
      size={size}
      variant={variant}
      disabled={isDisabled}
    >
      {label}
    </Button>
  );
};

export default CommonButton;
