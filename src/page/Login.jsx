import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

function Login() {
  async function handleSubmit(account, password) {
    try {
      const data = { account, password };
      const res = await fetch("http://127.0.0.1:3000/customer/login", {
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
         <h1>Login</h1>
         <LoginForm onSubmit={handleSubmit} />
       </Container>
     );
}

export default Login;
