import { reducer, initOrders, Action } from "./";
import { IOrder } from "../../common/interfaces";

it("test creating an order", () => {
  const newOrder: IOrder = {
    name: "a new order",
    price: 123
  };
  const newOrders = reducer(initOrders, {
    type: Action.CREATE,
    order: newOrder
  });
  expect(newOrders.length).toBe(initOrders.length + 1);
  expect(newOrders[newOrders.length - 1].name).toBe(newOrder.name);
  expect(newOrders[newOrders.length - 1].price).toBe(newOrder.price);
  expect(newOrders[newOrders.length - 1].hasOwnProperty("id")).toBeTruthy();
});

it("test updating an order", () => {
  const index = Math.floor(Math.random() * initOrders.length);
  const order = initOrders[index];
  const newName = `NEW ${order.name}`;
  const newPrice = 100 + order.price;
  const newNotes = "NEW NOTES";
  const newOrders = reducer(initOrders, {
    type: Action.UPDATE,
    order: {
      ...order,
      name: newName,
      price: newPrice,
      notes: newNotes
    }
  });
  const newOrder = newOrders[index];
  expect(newOrders.length).toBe(initOrders.length);
  expect(newOrder.id).toBe(order.id);
  expect(newOrder.name).toBe(newName);
  expect(newOrder.price).toBe(newPrice);
  expect(newOrder.notes).toBe(newNotes);
});

it("test updating a nonexistent norder", () => {
  const index = Math.floor(Math.random() * initOrders.length);
  const order = initOrders[index];
  const newName = `NEW ${order.name}`;
  const newPrice = 100 + order.price;
  const newNotes = "NEW NOTES";
  const newOrders = reducer(initOrders, {
    type: Action.UPDATE,
    order: {
      id: "HACUNA MATATA",
      name: newName,
      price: newPrice,
      notes: newNotes
    }
  });
  const newOrder = newOrders[index];
  expect(newOrders.length).toBe(initOrders.length);
  expect(newOrder.id).toBe(order.id);
  expect(newOrder.name).not.toBe(newName);
  expect(newOrder.price).not.toBe(newPrice);
  expect(newOrder.notes).not.toBe(newNotes);
});

it("test deleting an order", () => {
  const index = Math.floor(Math.random() * initOrders.length);
  const targetOrder = initOrders[index];
  const newOrders = reducer(initOrders, {
    type: Action.DELETE,
    order: targetOrder
  });
  expect(newOrders.length).toBe(initOrders.length - 1);
  expect(newOrders.find(order => order.id === targetOrder.id)).toBeUndefined();
});

it("test deleting a nonexistent order", () => {
  const newOrders = reducer(initOrders, {
    type: Action.DELETE,
    order: {
      id: "I AM NOT EXIST.",
      name: "foo",
      price: Infinity
    }
  });
  expect(newOrders).toEqual(initOrders);
});
