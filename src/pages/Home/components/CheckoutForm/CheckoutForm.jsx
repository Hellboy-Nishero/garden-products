import React, { useEffect } from "react";
import "./CheckoutForm.scss";
import { useForm } from "react-hook-form"; // Importing useForm for form handling
import { useDispatch } from "react-redux"; // Importing useDispatch to interact with Redux store
import Button from "../Buttons/Button"; // Importing custom Button component

function CheckoutForm({ sendingdiscount }) {
  const dispatch = useDispatch(); // Initializing Redux dispatch
  
  // Initializing form handling using react-hook-form
  const {
    register, // Function to register form fields
    handleSubmit, // Function to handle form submission
    reset, // Function to reset form fields
    formState: { errors, isValid }, // Object containing form validation state
  } = useForm({ mode: "onBlur" }); // Enabling validation on blur

  // Function triggered on form submission
  const onSubmit = (data) => {
    reset(); // Reset form fields after submission
  };

  return (
    <form className="container__form" onSubmit={handleSubmit(onSubmit)}>
      <label className="container__inputs">
        {/* Name Input Field */}
        <input
          {...register("name", {
            required: "Field is required!", // Validation rule for required field
          })}
          type="text"
          placeholder="Name"
          className="input"
        />
        {errors?.name && (
          <p className="error__message">{errors.name?.message}</p> // Displaying error message if validation fails
        )}

        {/* Phone Number Input Field */}
        <input
          {...register("number", {
            required: "Field is required!",
            minLength: { value: 13, message: "min 13 characters" }, // Minimum length validation
            maxLength: { value: 13, message: "max 13 characters" }, // Maximum length validation
          })}
          type="number"
          placeholder="Phone number"
          className="input"
        />
        {errors?.number && (
          <p className="error__message">{errors.number?.message}</p>
        )}

        {/* Email Input Field */}
        <input
          {...register("email", {
            required: "Field is required!",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Email pattern validation
              message: "invalid email address",
            },
          })}
          type="email"
          placeholder="Email"
          className="input"
        />
        {errors?.email && (
          <p className="error__message">{errors.email?.message}</p>
        )}

        {/* Conditional Rendering of Button based on sendingdiscount prop */}
        {sendingdiscount ? (
          <Button type={"submitted"} />
        ) : (
          <Button type={"secondary"}>Get a discount</Button>
        )}
      </label>
    </form>
  );
}

export default CheckoutForm;