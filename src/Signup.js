import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const userData = { name, password, email, phone, profession };
    localStorage.setItem("userData", JSON.stringify(userData));
    // Redirect to MovieList component
    navigate("/movie-list");
  };

  return (
    <div style={styles.container}>
      <h2>User Signup</h2>
      <input
        type="text"
        placeholder="Name"
        style={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        style={styles.input}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <select
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        style={styles.input}
      >
        <option value="">Select Profession</option>
        <option value="Engineer">Engineer</option>
        <option value="Doctor">Doctor</option>
        <option value="Teacher">Teacher</option>
        <option value="Artist">Artist</option>
        {/* Add more options as needed */}
      </select>
      <button style={styles.button} onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Signup;
