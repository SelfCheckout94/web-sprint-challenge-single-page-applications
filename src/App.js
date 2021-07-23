import React, { useState } from "react";

import Form from "./components/Form";

const initialFormValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  special: "",
};

const initialDisabled = true;
const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <Form
        id="pizza-form"
        values={formValues}
        disabled={disabled}
        handleChange={handleChange}
      />
    </>
  );
};
export default App;
