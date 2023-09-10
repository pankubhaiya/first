import React, { useState, useContext } from "react";
import "../Style/Login.css"
import { authContext } from "../Usecontext/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  
  const { setNameto, Loginto } = useContext(authContext)
  const [values, setValue] = useState({ email: "", password: "" });

  const handleEmailChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setValue((prv) => {
      if (name === "email") {
        return {
          email: value,
          password: prv.password
        }
      }
      if (name === "password") {
        return {
          email: prv.email,
          password: value
        }
      }
    })

  };




  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9090/user/login`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then((res) => res.json()).then((res) => {
      // console.log(res)
      if (res.ok) {
        setNameto(res.name)
        Loginto()
        alert(res.mes);
        navigate("/")
      } else {
        alert(res.msg);

      }
    }).catch((err) => {
      console.log(err);

    })


  };

  return (
    <div className="main-div">
      <div className="small-div">
        <h2>Log-in</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            className='login-input'
            onChange={handleEmailChange}
          />
       
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className='login-input'
            onChange={handleEmailChange}
          />
          <br />
          <button className="log-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
