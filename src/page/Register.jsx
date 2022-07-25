import React from "react";
import { Container } from 'react-bootstrap';
import RegisterForm from "../components/RegisterForm";


function Register() {
  async function handleSubmit(name, account, password, identityCard) {
    try {
      const data = { name, account, password, identityCard };
      const res = await fetch("http://127.0.0.1:3000/customer/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
        const responseData = await res.json();
      localStorage.setItem("token", responseData.accessToken);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default Register;
