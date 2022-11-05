import React from "react";
import "./contact.css";
import vectom from "../images/Zuri.png";
import footertext from "../images/Footer text.png";
import I4G from "../images/I4G.png";
import { useState, useRef } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState(false);

  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message === "") {
      setError(true);
      textRef.current.focus();
    } else {
      setError(false);
    }
    if (firstName === "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }

    if (lastName === "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }

    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  return (
    <div className="contact">
      <form>
        <h3>Contact Me</h3> <br />
        <p> Hi there, contact me to ask me about anything you have in mind </p>
        <div className="body">
          <div className="persons">
            <div className="inputs">
              <label>First name</label>
              <input
                type="text"
                placeholder="Enter first your name"
                id="first_name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameError ? (
                <p className="error">Please enter your firstname</p>
              ) : (
                ""
              )}
            </div>

            <div className="inputs">
              <label>Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameError ? (
                <p className="error">Please enter your lastname</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="inputs">
            <label>Email</label>
            <input
              type="email"
              placeholder="yourname@gmail.com"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailError ? (
            <p className="error">This is not a valid email format</p>
          ) : ( "" )}

          <div className="inputs">
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Send me a message and I'll reply you as soon as possible"
              onChange={(e) => setMessage(e.target.value)}
              ref={textRef}
            ></textarea>
          </div>
          {error ? <p className="error">Please enter a message</p> : ""}
        </div>
        <div className="check">
          <input type="checkbox" id="" name="" value="" className="box" />
          <label className="checkmessage">
            {" "}
            You agree to providing your data to Adewumi who may contact you
          </label>
        </div>
        <button id="btn__submit" type="button" onClick={(e) => handleSubmit(e)}>
          Send message
        </button>
      </form>
      <hr />
      <div className="footer">
        <footer>
          <div>
            <img src={vectom} alt="" />
          </div>
          <p>
            <img src={footertext} alt="" />
          </p>
          <div>
            <img src={I4G} alt="" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
