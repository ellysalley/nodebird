import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Button, Form, Input } from 'antd';

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = (e) => {
      setter(e.target.value);
    };
    return [value, handler];
  }

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    console.log({
      id,
      password,
      passwordCheck,
    })
  };

  const onChangePasswordCheck = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  return (
  <>
    <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
    </Head>
    <AppLayout>
      <Form onSubmit = {onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">id</label>
          <br />
          <Input name="user-id" value={id} requred="true" onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-password">password</label>
          <br />
          <Input name="user-password" type="password" value={password} requred="true" onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">password check</label>
          <br />
          <Input name="user-password-check" type="password" value={passwordCheck} requred="true" onChange={onChangePasswordCheck} />
          {passwordError && <div style={{ color: 'red' }}>Password is not match.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">Sign Up</Button>
        </div>
      </Form>
    </AppLayout>
  </>
  );
};

export default Signup;