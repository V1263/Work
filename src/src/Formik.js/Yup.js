import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Vaildation = yup.object().shape({
  Name:yup.string().Name().required(),
  DOB:yup.string().DOB().required(),
  sex:yup.string().sex().required(),
  email: yup.string().email().required(),
  Address:yup.string().Address().required(),
  Domain:yup.string().Domain().required(),
  password: yup.string().min(8).max(32).required(),
  Number:yup.string().min(10).max(12).required(),
});

const Yup = () => {
  const { register, handleSubmit, 
    formState: { errors }, reset } = useForm({ resolver: yupResolver(Vaildation),});
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div className="Yup">
      <center>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <h2>Navajna Technologies </h2>
          <br />
            
          <label>Name<span>*</span> </label>
          <input
            {...register("Name")}
            placeholder="Name"
            type="text"
            required />
          <p>{errors.Name?.message}</p>
          <br /> 

            
          <label>DATEOFBIRTH<span>*</span> </label>
          <input
            {...register("DOB")}
            placeholder="DATEOFBIRTH"
            type="Date"
            required />
          <p>{errors.DOB?.message}</p>
          <br /> 

          <label>email <span>*</span> </label>
          <input
            {...register("email")}
            placeholder="email"
            type="email"
            required />
          <p>{errors.email?.message}</p>
          <br />

          <label>password <span>*</span> </label>
          <input
            {...register("password")}
            placeholder="password"
            type="password"
            required
          />
          <p>{errors.password?.message}</p>
          <br />
            
          <label>Mobile Number <span>*</span> </label>
          <input
            {...register("Number")}
            placeholder="Number"
            type="Number"
            required />
          <p>{errors.Number?.message}</p>
          <br />
          
          <button type="submit">Sign in</button>
        </form>
      </center>
    </div>
  );
};

export default Yup;