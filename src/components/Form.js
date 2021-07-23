import React from "react";

export default function Form(props) {
  const { values, handleChange, handleSubmit, errors } = props;
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    handleChange(name, valueToUse);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit} id="pizza-form">
      <h2>Pizza Maker</h2>
      <div>
        <h3>Input your name</h3>
        <div>{errors.name}</div>
        <input
          id="name-input"
          name="name"
          type="text"
          onChange={onChange}
          value={values.name}
        />
      </div>
      <div>
        <label>
          <h3>Select your size:</h3>
          <select name="size" id="size-dropdown" onChange={onChange}>
            <option value="">-- Click Me --</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
        </label>
      </div>
      <div>
        <h3>Select your sauce:</h3>
        <label>
          Original Red
          <input
            name="sauce"
            type="radio"
            value="original red"
            onChange={onChange}
            checked={values.sauce === "original red"}
          />
        </label>
        <label>
          Garlic Ranch
          <input
            name="sauce"
            type="radio"
            value="garlic ranch"
            onChange={onChange}
            checked={values.sauce === "garlic ranch"}
          />
        </label>
        <label>
          BBQ Sauce
          <input
            name="sauce"
            type="radio"
            value="bbq sauce"
            onChange={onChange}
            checked={values.sauce === "bbq sauce"}
          />
        </label>
        <label>
          Spinach Alfredo
          <input
            name="sauce"
            type="radio"
            value="spinach alfredo"
            onChange={onChange}
            checked={values.sauce === "spinach alfredo"}
          />
        </label>
      </div>
      <div>
        <h3>Add Toppings</h3>
        <label>
          Pepperoni
          <input
            name="pepperoni"
            type="checkbox"
            onChange={onChange}
            checked={values.pepperoni}
          />
        </label>
        <label>
          Sausage
          <input
            name="sausage"
            type="checkbox"
            onChange={onChange}
            checked={values.sausage}
          />
        </label>
        <label>
          Bacon
          <input
            name="bacon"
            type="checkbox"
            onChange={onChange}
            checked={values.bacon}
          />
        </label>
        <label>
          Spicy Sausage
          <input
            name="spicySausage"
            type="checkbox"
            onChange={onChange}
            checked={values.spicySausage}
          />
        </label>
      </div>
      <div>
        <h3>Special Instructions</h3>
        <input
          id="special-text"
          name="special"
          type="text"
          onChange={onChange}
          value={values.special}
          placeholder="Anything else you'd like to add?"
        />
      </div>
      <div>
        <button id="order-button">Add to Order</button>
      </div>
    </form>
  );
}
