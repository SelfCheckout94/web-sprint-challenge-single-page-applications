import { Link, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import Form from "./components/Form";
import axios from "axios";
import { reach } from "yup";
import schema from "./validation/formSchema";

const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  bacon: false,
  spicySausage: false,

  special: "",
};

const initialFormErrors = {
  name: "",
};

const initialOrders = [];
const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [orders, setOrders] = useState(initialOrders);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch((err) => console.error(err))
      .finally(setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = (name, value) => {
    validate(name, value);
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
            values={formValues}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={formErrors}
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;
