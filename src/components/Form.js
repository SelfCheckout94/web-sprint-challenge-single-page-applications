import React from "react";

export default function Form(props) {
  const { values, disabled, handleChange } = props;
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    handleChange(name, valueToUse);
  };

  const onSubmit = () => {};

  return (
    <div>
      <h2>Pizza Maker</h2>
      <div>
        <h3>Input your name</h3>
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
          <select name="size" id="size-dropdown">
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
            checked={values.topping1 === "original red"}
          />
        </label>
        <label>
          Garlic Ranch
          <input
            name="sauce"
            type="radio"
            value="garlic ranch"
            onChange={onChange}
            checked={values.topping1 === "garlic ranch"}
          />
        </label>
        <label>
          BBQ Sauce
          <input
            name="sauce"
            type="radio"
            value="bbq sauce"
            onChange={onChange}
            checked={values.topping1 === "bbq sauce"}
          />
        </label>
        <label>
          Spinach Alfredo
          <input
            name="sauce"
            type="radio"
            value="spinach alfredo"
            onChange={onChange}
            checked={values.topping1 === "spinach alfredo"}
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
            checked={values.topping2}
          />
        </label>
        <label>
          Sausage
          <input
            name="sausage"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Bacon
          <input
            name="bacon"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Spicy Sausage
          <input
            name="spicy sausage"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Grilled Chicken
          <input
            name="grilled chicken"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Onions
          <input
            name="onions"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Green Pepper
          <input
            name="green pepper"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Diced Tomatos
          <input
            name="diced tomatos"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Black Olives
          <input
            name="black olives"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Roasted Garlic
          <input
            name="roasted garlic"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Artichoke Hearts
          <input
            name="artichoke hearts"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Three Cheese
          <input
            name="three cheese"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Pineapple
          <input
            name="pineapple"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
          />
        </label>
        <label>
          Extra Cheese
          <input
            name="extra cheese"
            type="checkbox"
            onChange={onChange}
            checked={values.topping2}
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
        <button disabled={disabled} id="order-button">
          Add to Order
        </button>
      </div>
    </div>
  );
}
