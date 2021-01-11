import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.email || !state.password) {
      return alert("Please specify both email and password");
    }

    console.log(process.env.REACT_APP_SERVER_ADDRESS);
    axios
      .post(`${process.env.REACT_APP_SERVER_ADDRESS}/login`, state)
      .then(({ data }) => localStorage.setItem("Token", data.token))
      .catch((err) => alert(err.response.data));

    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={state.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
