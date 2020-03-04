import React, { createContext, FunctionComponent, useReducer } from "react";

import { IOrder } from "../../common/interfaces";
import { randId } from "../../common/utils";

export enum Action {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE"
}

interface IAction {
  type: Action;
  order: IOrder;
}

export const initOrders: IOrder[] = [
  {
    id: randId(),
    name: "Watermelon Cleanser",
    price: 17
  },
  {
    id: randId(),
    name: "Coco Spice",
    price: 17
  },
  {
    id: randId(),
    name: "Mujito Jug",
    price: 30
  },
  {
    id: randId(),
    name: "PIMMS Jug",
    price: 30
  },
  {
    id: randId(),
    name: "CUBA LIBRE",
    price: 17
  },
  {
    id: randId(),
    name: "Premium Bottles",
    price: 6.25
  },
  {
    id: randId(),
    name: "Domestic Bottles",
    price: 5.25
  },
  {
    id: randId(),
    name: "Watermelon Cleanser",
    price: 17
  },
  {
    id: randId(),
    name: "Coco Spice",
    price: 17
  },
  {
    id: randId(),
    name: "Mujito Jug",
    price: 30
  },
  {
    id: randId(),
    name: "PIMMS Jug",
    price: 30
  },
  {
    id: randId(),
    name: "CUBA LIBRE",
    price: 17
  },
  {
    id: randId(),
    name: "Premium Bottles",
    price: 6.25
  },
  {
    id: randId(),
    name: "Domestic Bottles",
    price: 5.25
  },
  {
    id: randId(),
    name: "Watermelon Cleanser",
    price: 17
  },
  {
    id: randId(),
    name: "Coco Spice",
    price: 17
  },
  {
    id: randId(),
    name: "Mujito Jug",
    price: 30
  },
  {
    id: randId(),
    name: "PIMMS Jug",
    price: 30
  },
  {
    id: randId(),
    name: "CUBA LIBRE",
    price: 17
  },
  {
    id: randId(),
    name: "Premium Bottles",
    price: 6.25
  },
  {
    id: randId(),
    name: "Domestic Bottles",
    price: 5.25
  },
  {
    id: randId(),
    name: "Watermelon Cleanser",
    price: 17
  },
  {
    id: randId(),
    name: "Coco Spice",
    price: 17
  },
  {
    id: randId(),
    name: "Mujito Jug",
    price: 30
  },
  {
    id: randId(),
    name: "PIMMS Jug",
    price: 30
  },
  {
    id: randId(),
    name: "CUBA LIBRE",
    price: 17
  },
  {
    id: randId(),
    name: "Premium Bottles",
    price: 6.25
  },
  {
    id: randId(),
    name: "Domestic Bottles",
    price: 5.25
  },
  {
    id: randId(),
    name: "Watermelon Cleanser",
    price: 17
  },
  {
    id: randId(),
    name: "Coco Spice",
    price: 17
  },
  {
    id: randId(),
    name: "Mujito Jug",
    price: 30
  },
  {
    id: randId(),
    name: "PIMMS Jug",
    price: 30
  },
  {
    id: randId(),
    name: "CUBA LIBRE",
    price: 17
  },
  {
    id: randId(),
    name: "Premium Bottles",
    price: 6.25
  },
  {
    id: randId(),
    name: "Domestic Bottles",
    price: 5.25
  },
  {
    id: randId(),
    name: "Watermelon Cleanser",
    price: 17
  },
  {
    id: randId(),
    name: "Coco Spice",
    price: 17
  },
  {
    id: randId(),
    name: "Mujito Jug",
    price: 30
  },
  {
    id: randId(),
    name: "PIMMS Jug",
    price: 30
  },
  {
    id: randId(),
    name: "CUBA LIBRE",
    price: 17
  },
  {
    id: randId(),
    name: "Premium Bottles",
    price: 6.25
  },
  {
    id: randId(),
    name: "Domestic Bottles",
    price: 5.25
  },
  {
    id: randId(),
    name: "Watermelon Cleanser",
    price: 17
  },
  {
    id: randId(),
    name: "Coco Spice",
    price: 17
  },
  {
    id: randId(),
    name: "Mujito Jug",
    price: 30
  },
  {
    id: randId(),
    name: "PIMMS Jug",
    price: 30
  },
  {
    id: randId(),
    name: "CUBA LIBRE",
    price: 17
  },
  {
    id: randId(),
    name: "Premium Bottles",
    price: 6.25
  },
  {
    id: randId(),
    name: "Domestic Bottles",
    price: 5.25
  },
  {
    id: randId(),
    name: "Watermelon Cleanser",
    price: 17
  },
  {
    id: randId(),
    name: "Coco Spice",
    price: 17
  },
  {
    id: randId(),
    name: "Mujito Jug",
    price: 30
  },
  {
    id: randId(),
    name: "PIMMS Jug",
    price: 30
  },
  {
    id: randId(),
    name: "CUBA LIBRE",
    price: 17
  },
  {
    id: randId(),
    name: "Premium Bottles",
    price: 6.25
  },
  {
    id: randId(),
    name: "Domestic Bottles",
    price: 5.25
  },
  {
    id: randId(),
    name: "Watermelon Cleanser",
    price: 17
  },
  {
    id: randId(),
    name: "Coco Spice",
    price: 17
  },
  {
    id: randId(),
    name: "Mujito Jug",
    price: 30
  },
  {
    id: randId(),
    name: "PIMMS Jug",
    price: 30
  },
  {
    id: randId(),
    name: "CUBA LIBRE",
    price: 17
  },
  {
    id: randId(),
    name: "Premium Bottles",
    price: 6.25
  },
  {
    id: randId(),
    name: "Domestic Bottles",
    price: 5.25
  }
];

export const reducer: (state: IOrder[], action: IAction) => IOrder[] = (
  state,
  action
) => {
  if (action.type === Action.CREATE) {
    return [...state, { ...action.order, id: randId() }];
  } else if (action.type === Action.DELETE) {
    const newOrders = [] as IOrder[];
    state.forEach(order => {
      if (order.id === action.order.id) {
        return;
      }
      newOrders.push(order);
    });
    return newOrders;
  } else if (action.type === Action.UPDATE) {
    const newOrders = [...state];
    const index = state.findIndex(order => order.id === action.order.id);
    if (index === -1) {
      return state;
    }
    newOrders[index] = {
      ...action.order
    };
    return newOrders;
  } else {
    return state;
  }
};

export const OrderContext = createContext({
  orders: [] as IOrder[],
  dispatch: (value: IAction) => {}
});

export const OrderProvider: FunctionComponent = ({ children }) => {
  const [orders, dispatch] = useReducer(reducer, initOrders);
  return (
    <OrderContext.Provider value={{ orders, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
