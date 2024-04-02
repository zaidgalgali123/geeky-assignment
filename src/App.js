// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import MovieList from "./MovieList";
import CompanyInfo from "./CompanyInfo";

function App() {
  return (
    <Router>
      <div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/signup" style={styles.link}>
                Signup
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/login" style={styles.link}>
                Login
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/company-info" style={styles.link}>
                Company Info
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie-list" element={<MovieList />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  navItem: {
    display: "inline",
    marginRight: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default App;
