import React, { useState } from "react";

export default function PersonalInfo(props) {
  const [personalInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeName = (event) => {
    setPersonInfo((prev) => {
      return {
        ...prev,
        name: event.target.value,
      };
    });
  };
  const handleChangeEmail = (event) => {
    setPersonInfo((prev) => {
      return {
        ...prev,
        email: event.target.value,
      };
    });
  };
  const handleChangePhone = (event) => {
    setPersonInfo((prev) => {
      return {
        ...prev,
        phone: event.target.value,
      };
    });
  };
  const handleClickNext = () => {
    console.log(personalInfo);
    props.setCurrentPage(2);
  };

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  return (
    <div>
      <h2>Personal Info</h2>
      <p className="gray">Please provide your name, email and phone number</p>
      <form>
        <div className="form-item">
          <label htmlFor="input-name">Name</label>
          <br></br>
          <input name="input-name" onChange={handleChangeName}></input>
        </div>
        <div className="form-item">
          <label htmlFor="input-email">Email Address</label>
          <br></br>
          <input name="input-email" onChange={handleChangeEmail}></input>
        </div>
        <div className="form-item">
          <label htmlFor="input-phone">Phone Number</label>
          <span>This field is required</span>
          <br></br>
          <input name="input-phone" onChange={handleChangePhone}></input>
        </div>
      </form>
      <nav>
        <div className="button-back"></div>
        <div className="button-next" onClick={handleClickNext}>
          Next Step
        </div>
      </nav>
    </div>
  );
}
