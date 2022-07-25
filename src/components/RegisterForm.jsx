import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

function RegisterForm(props) {
    const { onSubmit } = props;
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [identityCard, setIdentityCard] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, account, password,identityCard);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAccount">
        <Form.Label>Account</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Account"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicIdentityCard">
        <Form.Label>IdentityCard</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter IdentityCard"
          value={identityCard}
          onChange={(e) => setIdentityCard(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default RegisterForm;
