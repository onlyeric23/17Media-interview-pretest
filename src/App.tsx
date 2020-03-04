import * as React from "react";

import Header from "./components/Header";
import { OrderProvider } from "./components/OrderContext";
import OrderList from "./components/OrderList";

import "./styles.css";

export default function App() {
  return (
    <OrderProvider>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <div className="App">
        <Header />
        <OrderList />
      </div>
    </OrderProvider>
  );
}
