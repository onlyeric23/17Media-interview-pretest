import React, { FunctionComponent, memo } from "react";
import { IOrder } from "../../common/interfaces";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

import "./styles.scss";

const Order: FunctionComponent<
  IOrder & { onDelete: () => void; onEdit: () => void }
> = ({ name, price, notes, onDelete, onEdit }) => {
  return (
    <div className="order">
      <div className="major">
        <div className="info">
          <div className="order-name">{name}</div>
          <div className="order-price">$ {price.toFixed(2)}</div>
        </div>
        <div className="actions">
          <FaTrashAlt onClick={onDelete} />
          <FaEdit onClick={onEdit} />
        </div>
      </div>
      {!!notes && (
        <div className="minor">
          <hr />
          <div className="order-notes">{notes}</div>
        </div>
      )}
    </div>
  );
};

export default memo(Order);
