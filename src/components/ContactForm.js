import React, { useState } from "react";
import "../styles/Contact.css";
import Page from './Page';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function ContactForm() {

  // different way to add the title 
  // // Use useEffect to set the title of the page on the tab
  // useEffect(() => {
  //   document.title = "Contact Page";
  // });

  // Here we set two state variables for firstName and lastName using `useState`
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "fullName") {
      setFullName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }


    // validate message and name to not be empty
    if (message.trim().length === 0 && fullName.trim().length === 0) {
      setErrorMessage("Please input a valid name and a message.");
      return;
    } else if (message.trim().length  === 0) {
      setErrorMessage("Message is empty. Please input a message.");
      return;
    } else if (fullName.trim().length === 0) {
      setErrorMessage("Please provide a valid name.");
      return;
    }

    if (message.trim().length !== 0) {
      console.log('input value is NOT empty');
    } else {
      console.log('input value is empty');
      setErrorMessage("Message is empty");
      return;
    }

    // validate name is complete
    if (fullName.trim().length !== 0) {
      console.log('input value is NOT empty');
    } else {
      console.log('input value is empty');
      setErrorMessage("Message is empty");
      return;
    }

    // Thank the user and clear the inputs
    alert(`Thank you ${fullName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.

    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Page title={'Contact'}>
      <div className="contactForm">
        <h1 className="contactTitle">Contact</h1>
        <form className="form">
          <input
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name:"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email Address:"
          />
          <input className="messageBox"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message:"
          />
          <button className="button" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </Page>
  );
}

export default ContactForm;
