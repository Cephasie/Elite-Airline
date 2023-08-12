import React, {useState} from 'react';
import {loginUrl} from '../../api/Api';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {TextField, Box} from '@mui/material'

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
      {/* {ReactDOM.createPortal()} */}
      <Box component="form" onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="">
            email:
            <input
              value={data.email}
              name="email"
              onChange={handleChange}
              type="email"
            />
          </label> */}
          <TextField sx={{marginTop: '20px'}}
            value={data.email}
            name="email"
            onChange={handleChange}
            type="email"
            label='Email'
            id='email'
            variant='outlined'
          />
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
          <button type="submit">Submit</button>
        </div>
      </Box>
      <p onClick={handleNavigate}>Forgot Password</p>
    </div>
  );
};

export default Login;