import React from "react";

function CompanyInfo() {
  return (
    <div style={styles.container}>
      <h2>Company Info</h2>
      <p>Company: Geeksynergy Technologies Pvt Ltd</p>
      <p>Address: Sanjayanagar, Bengaluru-56</p>
      <p>Phone: XXXXXXXXX09</p>
      <p>Email: XXXXXX@gmail.com</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
  },
};

export default CompanyInfo;
