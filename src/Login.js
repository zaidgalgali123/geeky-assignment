import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.name === name && userData.password === password) {
      setInvalidCredentials(false);

      navigate("/movie-list");
    } else {
      // Invalid credentials
      setInvalidCredentials(true);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
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
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
      {invalidCredentials && (
        <p style={styles.errorMessage}>Invalid Credentials</p>
      )}
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
  errorMessage: {
    marginTop: "10px",
    color: "red",
  },
};

export default Login;
