import React, { useContext, useState } from "react";
import "./Signup.css";
import "./Authentication.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "../context/LoginContext";

const StyledLink = styled(Link)`
  color: #0095f6;
  font-weight: bold;
  text-decoration: none;
`;
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-,]+$/,
      `Email is not valid`
    ),
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at min 3 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, `Password must contain at least one uppercase letter`)
    .matches(
      /[^a-zA-Z0-9]/,
      `Password must contain at least one special characters`
    ),
});

function Signup() {
  const { setUser } = useContext(LoginContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/login");
    setUser(data);
  };

  return (
    <div className="authentication">
      <div className="left_auth">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" />
        <img src="https://www.sebastianburakowski.pl/wp-content/uploads/2020/10/instagramiconinstagramlogologoicon-1320184050987950067-300x300.png" />
      </div>
      <div className="sign_up">
        <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" />
        <input {...register("email")} type="email" placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
        <input {...register("username")} type="text" placeholder="Username" />
        {errors.username && <p>{errors.username.message}</p>}

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button onClick={handleSubmit(onSubmit)}>Sign Up</button>
        <div className="more_auth">
          <span>
            Have account ? Pleas <StyledLink to="/login">LOG IN</StyledLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
