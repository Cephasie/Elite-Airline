import React, {useState} from 'react';
import {loginUrl} from '../../api/Api';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { TextField } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const initialValue = {
    email: 'inem@gmail.com',
    password: '',
  };

  const [data, setData] = useState (initialValue);

  const handleChange = async e => {
    e.preventDefault ();
    setData (prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    const userData = {
      email: data.email,
      password: data.password,
    };

    const response = await axios.post(loginUrl, userData);
    console.log ('BC res 1--> ', response);
    if (response.status === 200) {
      console.log ('BC res --> ', response.data);
    }
  };

  const handleNavigate = () => {
    navigate('/forgot-password', {state:{email: data.email}})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField>
            value = {data.email}
            name = "email"
            onchange = {handleChange}
            type = "email"
            id = "email"
            label = "Email"
            variant = "outlined"
          <TextField/>
        </div>
        <div>
          <label htmlFor="">
            password:
            <input
              value={data.password}
              name="password"
              onChange={handleChange}
              type="password"
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button></div>
      </form>
      <p onClick={handleNavigate}>Forgot Password</p>
    </div>
  );
};

export default Login;
