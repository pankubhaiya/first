import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from "react-toastify";

const Sign = () => {
  const [values, setValue] = useState({ email: "", password: "", name: "" });


  const handaldatachange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setValue((prv) => {
      if (name === "name") {
        return {
          name: value,
          email: prv.email,
          password: prv.password
        }
      }
      if (name === "email") {
        return {
          name: prv.name,
          email: value,
          password: prv.password
        }
      }
      if (name === "password") {
        return {
          name: prv.name,
          email: prv.email,
          password: value
        }
      }
    })

  };




  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9090/user/sign`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then((res) => res.json()).then((res) => {
      // console.log(res)
      if (res.ok) {
        alert(res.msg);

      } else {
        alert(res.msg);

      }
    }).catch((err) => {
      console.log(err);

    })
  };

  return (
    <div className='main-div'>
      <div className='small-div'>

        <h2>Sign-up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            className='login-input'
            onChange={handaldatachange}
          />
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            className='login-input'
            onChange={handaldatachange}
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className='login-input'
            onChange={handaldatachange}
          />
          <br />
          <button className='sub-button' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
