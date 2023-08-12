import React, { useState } from "react";
import { registerAdminUrl } from "../../api/Api";
import axios from "axios";
import styles from "./AdminSignUp.module.css";

const AdminSignUp = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    userName: "",
  };

  const [data, setData] = useState(initialValue);

  const handleChange = async (e) => {
    e.preventDefault();
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
    };

    const response = await axios.post(registerAdminUrl, userData);

    if (response.status === 200) {
      console.log("BC res --> ", response.data);
    }
  };

  return (
    <div className={styles.signUp}>
      <div className={styles.signUp1}>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="">FirstName: </label>
            <input
              value={data.firstName}
              name="firstName"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="">lastName: </label>
            <input
              value={data.lastName}
              name="lastName"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="">email: </label>
            <input
              value={data.email}
              name="email"
              onChange={handleChange}
              type="email"
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="">userName: </label>
            <input
              value={data.userName}
              name="userName"
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="">phoneNumber: </label>
            <input
              value={data.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              type="tel"
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="">password: </label>
            <input
              value={data.password}
              name="password"
              onChange={handleChange}
              type="password"
            />
          </div>
          <div className={styles.btn}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignUp;