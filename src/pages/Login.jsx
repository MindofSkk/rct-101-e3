import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const { login } = useContext(AuthContext);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div>
      <input
        data-cy="login-email"
        name="email"
        type="email"
        placeholder="Enter Email id"
        onChange={hanldeChange}
      />
      <input
        data-cy="login-password"
        name="password"
        type="password"
        placeholder="Enter Password"
        onChange={hanldeChange}
      />
      <button data-cy="login-submit" onClick={handleSubmit}>
        <Link to="./Product">
        submit</Link></button>
    </div>
  );
};

export default Login;
