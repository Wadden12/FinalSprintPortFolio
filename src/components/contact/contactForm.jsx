import React, { useState } from "react";
import classes from "./contactForm.module.css";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [phoneIsValid, setPhoneIsValid] = useState(true);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const inquiryChangeHandler = (e) => {
    setInquiry(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setPhoneIsValid(false);

    if (phone.trim === "") {
      setPhoneIsValid(false);
      return;
    }

    setPhoneIsValid(true);

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);

    if (email.trim() === "") {
      setEmailIsValid(false);
      return;
    }
    setEmailIsValid(true);

    setName("");
    setEmail("");
    setPhone("");
  };

  const nameInputClasses = nameIsValid
    ? `${classes.control}`
    : `${classes.control} ${classes.invalid}`;
  const emailInputClasses = emailIsValid
    ? `${classes.control}`
    : `${classes.control} ${classes.invalid}`;
  const phoneInputClasses = phoneIsValid
    ? `${classes.control}`
    : `${classes.control} ${classes.invalid}`;

  return (
    <section className={classes.contact}>
      <form onSubmit={onSubmit}>
        <div>
          <div className={nameInputClasses}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Mike Wadden"
              onChange={nameChangeHandler}
              value={name}
            ></input>
            {!nameIsValid && (
              <p className={classes["error-text"]}>Name must not be empty</p>
            )}
          </div>
          <div className={emailInputClasses}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="mikewadden12@gmail.com"
              onChange={emailChangeHandler}
              value={email}
            ></input>
            {!emailIsValid && (
              <p className={classes["error-text"]}>Email must not be empty</p>
            )}
          </div>
          <div className={phoneInputClasses}>
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="709-687-5085"
              onChange={phoneChangeHandler}
              value={phone}
            ></input>
            {!phoneIsValid && (
              <p className={classes["error-text"]}>Phone must not be empty</p>
            )}
          </div>
          <div className={classes.control}>
            <label htmlFor="inquiry" onChange={inquiryChangeHandler}>
              Subject of Inquiry
            </label>
            <textarea
              rows="4"
              id="inquiry"
              placeholder="My contact info is above or fill out the blocks and leave a message. I look forward to hearing from you"
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Leave a Message</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
