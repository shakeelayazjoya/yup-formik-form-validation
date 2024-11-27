import React from "react";
import "./App.css"; // Import external CSS file
import userSchema from "./validation/uservalidation"; // Import your Yup schema

const App = () => {
  const createUser = async (event) => {
    event.preventDefault();

    // Gather form data
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      // Validate form data using Yup
      await userSchema.validate(formData, { abortEarly: false }); // Validates all fields
      console.log("Valid data:", formData);
    } catch (error) {
      // Log validation errors
      error.inner.forEach((err) => {
        console.log(err.message);
      });
    }
  };

  return (
    <div className="app-container">
      <h1 className="form-title">Create User</h1>
      <form onSubmit={createUser} className="user-form">
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email..."
          className="form-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password..."
          className="form-input"
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
