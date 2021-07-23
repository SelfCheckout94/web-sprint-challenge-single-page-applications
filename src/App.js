import { Link, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import Form from "./components/Form";
import axios from "axios";

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  pepproni: false,
  sausage: false,
  bacon: false,
  spicySausage: false,

  special: "",
};

const initialOrders = [];
const initialDisabled = true;
const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [orders, setOrders] = useState(initialOrders);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getOrders = () => {
    axios.get("https://reqres.in/api/orders").then((res) => {
      setOrders(res.data);
    });
  };

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
        console.log(orders);
      })
      .catch((err) => console.error(err))
      .finally(setFormValues(initialFormValues));
  };

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ["pepperoni", "sausage", "bacon", "spicySausage"].filter(
        (topping) => formValues[topping]
      ),
    };
    postNewOrder(newOrder);
    console.log(orders);
  };

  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/pizza" id="order-pizza">
            Place Order
          </Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza">
          <Form
            id="pizza-form"
            values={formValues}
            disabled={disabled}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;
