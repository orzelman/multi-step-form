import React, { useState, useEffect } from "react";

export default function PersonalInfo(props) {
  const [validation, setValidation] = useState([
    {
      empty: undefined,
    },
    {
      empty: undefined,
      unvalid: undefined,
    },
    {
      name: undefined,
    },
  ]);
  useEffect(() => {
    if(props.personalInfo.name!=='')  validation[0].empty=false;
    if(props.personalInfo.email!=='')  validation[1].empty=false;
    if(props.personalInfo.phone!=='')  validation[2].empty=false;
  }, []);

  
  const handleChangeInput = (event) => {
    props.setPersonInfo((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  };

  const handleClickNext = () => {
    const newValidation = [...validation];
    for (let i = 0; i < validation.length; i++) {
      if (validation[i].empty === undefined) newValidation[i].empty = true;
    }
    setValidation(newValidation);
    for (let i = 0; i < validation.length; i++) {
      if (validation[i].empty || validation[i].unvalid) {
        return;
      }
    }
    props.setCurrentPage(2);
  };

  function isValidEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(props.personalInfo.email);
  }

  function handleBlur(event, inputNumber) {
    const newValidation = [...validation];
    if (event.target.value === "") {
      newValidation[inputNumber].empty = true;
    } else {
      newValidation[inputNumber].empty = false;
    }
    if (!newValidation[1].empty) {
      newValidation[1].unvalid = !isValidEmail();
    }
    setValidation(newValidation);
  }

  return (
    <div className="container">
      <section>
        <h3>{new Date().getMilliseconds()}</h3>
        <h2>Personal Info</h2>
        <p className="gray">Please provide your name, email and phone number</p>
        <form>
          <div className="form-item">
            <div className="form-item-description">
              <label htmlFor="input-name">Name</label>
              <p
                className={`required-field ${
                  validation[0].empty ? "show" : ""
                }`}
              >
                This field is required
              </p>
            </div>
            <input
              id="name"
              className={`${
                validation[0].empty ? "red-border red-border:focus" : ""
              }`}
              onChange={handleChangeInput}
              onBlur={(event) => handleBlur(event, 0)}
              value={props.personalInfo.name}
            ></input>
          </div>
          <div className="form-item">
            <div className="form-item-description">
              <label htmlFor="input-name">Email Address</label>
              <p
                className={`required-field ${
                  validation[1].empty || validation[1].unvalid ? "show" : ""
                }`}
              >
                {validation[1].empty ? "This field is required" : "Wrong email"}
              </p>
            </div>
            <input
              id="email"
              className={
                validation[1].empty || validation[1].unvalid
                  ? "red-border red-border:focus"
                  : ""
              }
              name="input-email"
              onChange={handleChangeInput}
              onBlur={(event) => handleBlur(event, 1)}
              value={props.personalInfo.email}
            ></input>
          </div>
          <div className="form-item">
            <div className="form-item-description">
              <label htmlFor="input-name">Phone Number</label>
              <p
                className={`required-field ${
                  validation[2].empty ? "show" : ""
                }`}
              >
                This field is required
              </p>
            </div>
            <input
              id="phone"
              className={
                validation[2].empty ? "red-border red-border:focus" : ""
              }
              name="input-phone"
              onChange={handleChangeInput}
              onBlur={(event) => handleBlur(event, 2)}
              value={props.personalInfo.phone}
            ></input>
          </div>
        </form>
      </section>
      <nav>
        <div className="button-back"></div>
        <div className="button-next" disabled={true} onClick={handleClickNext}>
          Next Step
        </div>
      </nav>
    </div>
  );
}
