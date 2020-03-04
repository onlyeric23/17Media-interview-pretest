import React, { FunctionComponent } from "react";

import "./styles.scss";

const Modal: FunctionComponent<{ onClose: () => void }> = ({
  onClose,
  children
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };
  return (
    <div className="modal" onClick={onClose} onKeyDown={handleKeyDown}>
      <div
        className="modal-content"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
