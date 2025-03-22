import React, { useContext, useEffect } from "react";
import "./CheckoutForm.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button/Button"


function CheckoutForm({
    sendingdiscount,
  }) {
    const dispatch = useDispatch();
    
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isValid },
    } = useForm({ mode: "onBlur" });
  
    const onSubmit = (data) => {
      
      reset();
    };
    return (
      <form className="container__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="container__inputs">
          <input
            {...register("name", {
              required: "Field is required!",
            })}
            type="text"
            placeholder="Name"
            className={`input`}
          />
          {errors?.name && (
            <p className="error__message">{errors.name?.message}</p>
          )}
  
          <input
            {...register("number", {
              required: "Field is required!",
              minLength: { value: 13, message: "min 13 characters" },
              maxLength: { value: 13, message: "max 13 characters" },
            })}
            type="number"
            placeholder="Phone number"
            className={`input`}
          />
          {errors?.number && (
            <p className="error__message">{errors.number?.message}</p>
          )}
  
          <input
            {...register("email", {
              required: "Field is required!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className={`input`}
          />
          {errors?.email && (
            <p className="error__message">{errors.email?.message}</p>
          )}
          {sendingdiscount ?
          <Button type={"submitted"} /> :
          <Button type={"secondary"}>
            Get a discount 
          </Button> }
        </label>
      </form>
    );
  }
  
  export default CheckoutForm;