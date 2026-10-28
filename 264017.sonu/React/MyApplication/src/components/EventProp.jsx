import { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resultname, setresultname] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      mobile === ""
    ) {
      setError("All fields are required");
    } else {
      setSuccess("Registration successful!");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <p>{resultname}</p> 

        <input 
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={() => setresultname(name)}>
          click here
        </button>

        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button type="submit">Register</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default RegistrationForm;