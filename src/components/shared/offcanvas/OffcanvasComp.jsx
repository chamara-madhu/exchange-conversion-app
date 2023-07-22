import React from "react";
import { Offcanvas } from "react-bootstrap";

const OffcanvasComp = ({
  show,
  title,
  children,
  placement = "end",
  cusClassName,
  handleClose,
}) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={placement}
      className={cusClassName}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasComp;
