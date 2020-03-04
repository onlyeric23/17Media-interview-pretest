import React, { FunctionComponent, useState } from "react";
import classNames from "classnames";
import Modal from "../Modal";
import { IOrder } from "../../common/interfaces";

import "./styles.scss";

interface IFields {
  name: string;
  price: string;
  notes: string;
}

const Label: FunctionComponent<{
  name: string;
  error: string;
  required?: boolean;
}> = ({ name, error, required, children }) => {
  return (
    <span className="label-wrapper">
      <label className={classNames({ required })} htmlFor={name}>
        {children}
      </label>
      {!!error && <span className="error">{error}</span>}
    </span>
  );
};

const EditModal: FunctionComponent<{
  order?: IOrder;
  onConfirm: (values: Omit<IOrder, "id">, originalOrder?: IOrder) => void;
  onClose: () => void;
}> = ({ order, onConfirm, onClose }) => {
  const [values, setValues] = useState<IFields>(
    order
      ? {
          name: order.name || "",
          price: order.price.toFixed(2) || "0.00",
          notes: order.notes || ""
        }
      : {
          name: "",
          price: "0.00",
          notes: ""
        }
  );
  const [errors, setErrors] = useState<IFields>({} as IFields);

  const validate = () => {
    const { name, price } = values;
    const errors = {} as any;
    if (!name) {
      errors.name = "Required";
    }
    if (!parseFloat(price)) {
      errors.price = "Required";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    onConfirm(
      {
        ...values,
        price: parseFloat(values.price)
      },
      order
    );
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <form className="edit-form" onSubmit={handleSubmit}>
        <Label required name="name" error={errors.name}>
          Name
        </Label>
        <input
          id="name"
          value={values.name}
          onChange={e =>
            setValues({
              ...values,
              name: e.target.value
            })
          }
          autoFocus
        />

        <Label required name="price" error={errors.price}>
          Price
        </Label>
        <input
          id="price"
          value={values.price}
          inputMode="numeric"
          pattern="[0-9]*"
          type="number"
          step="0.01"
          onChange={e => {
            const raw = e.target.value;
            if (!raw) {
              setValues({
                ...values,
                price: "0.00"
              });
              return;
            }
            if (raw.length > 11) {
              return;
            }
            const noDot = parseInt(raw.replace(".", ""), 10);
            setValues({
              ...values,
              price: (noDot / 100).toFixed(2)
            });
          }}
        />

        <Label name="notes" error={errors.notes}>
          Price
        </Label>
        <textarea
          id="notes"
          value={values.notes}
          onChange={e =>
            setValues({
              ...values,
              notes: e.target.value
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default EditModal;
