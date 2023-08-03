import React, {useState} from 'react';
import {registerAdminUrl} from '../../api/Api';
import axios from 'axios';

const AdminSignUp = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    userName: '',
  };

  const [data, setData] = useState (initialValue);

  const handleChange = async e => {
    e.preventDefault ();
    setData (prevState => ({
        ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
        e.preventDefault ();
        const userData = {
            userName: data.userName,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password
        }

        const response = await axios.post(registerAdminUrl, userData)

        if(response.status === 200){
            console.log('BC res --> ',response.data)
        }
    }

  return (
    <div className='signUp'>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="">
          FirstName: <input value={data.firstName} name="firstName" onChange={handleChange} type="text" />
        </label>
        </div>
        <div>
        <label htmlFor="">
        lastName: <input value={data.lastName} name="lastName" onChange={handleChange} type="text" />
        </label>
        </div>
        <div>
        <label htmlFor="">
            email: <input value={data.email} name="email" onChange={handleChange} type="email" />
        </label>
        </div>
        <div>
        <label htmlFor="">
            userName: <input value={data.userName} name="userName" onChange={handleChange} type="text" />
        </label>
        </div>
        <div>
        <label htmlFor="">
            phoneNumber: <input value={data.phoneNumber} name="phoneNumber" onChange={handleChange} type="tel" />
        </label>
        </div>
        <div>
        <label htmlFor="">
        password: <input value={data.password} name="password" onChange={handleChange} type="password" />
        </label>
        </div>
        <div><button type="submit">Submit</button></div>
      </form>
    </div>
  );
};

export default AdminSignUp;
