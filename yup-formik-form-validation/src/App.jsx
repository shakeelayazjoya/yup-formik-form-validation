import React from "react";
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
    <div>
      <h1>Create User</h1>
      <form onSubmit={createUser}>
        <input type="text" name="name" placeholder="Name..." />
        <input type="email" name="email" placeholder="Email..." />
        <input type="password" name="password" placeholder="Password..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
