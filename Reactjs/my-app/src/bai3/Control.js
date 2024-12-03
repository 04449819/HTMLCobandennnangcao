import React from "react";

const Control = ({ className, image, onClose }) => {
  return (
    <div className={`Control ${className}`}>
      <div className="Control__Exit" onClick={onClose}>
        <box-icon name="x"></box-icon>
      </div>
      <div className="Control__prev">
        <box-icon name="skip-previous"></box-icon>
      </div>
      <div className="Control__Content">
        <img src={image} alt="" />
      </div>
      <div className="Control__next">
        <box-icon name="skip-next"></box-icon>
      </div>
    </div>
  );
};

export default Control;
