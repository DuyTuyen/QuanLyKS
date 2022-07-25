import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap'
 
function LoginForm(props) {
    const {onSubmit} = props
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(account,password)
    }
    return (
    <Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-3" controlId="formBasicAccount">
        <Form.Label>Account</Form.Label>
                <Form.Control type="text" placeholder="Enter Account" value={account} onChange={e => setAccount(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default LoginForm;