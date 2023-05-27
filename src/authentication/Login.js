import React, { useState } from "react";
import "./Login.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const StyledLink = styled(Link)`
  color: #0095f6;
  font-weight: bold;
  text-decoration: none;
`;

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClick = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.email === data.email && user.password === data.password) {
      alert("Login Successful");
      navigate("/home");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <div className="authentication">
      <div className="left_auth">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" />
        <img src="https://www.sebastianburakowski.pl/wp-content/uploads/2020/10/instagramiconinstagramlogologoicon-1320184050987950067-300x300.png" />
      </div>{" "}
      <div className="login">
        <img src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" />
        <input {...register("email")} type="email" placeholder="Email" />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button onClick={handleSubmit(handleClick)}>Log in</button>
        <div className="more_auth">
          <span>
            Do You have account ? <StyledLink to="/">Register here</StyledLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
