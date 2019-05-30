import React, { useState, useCallback } from "react";
import { Button, Form, Input } from "antd";

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback(e => {
      setter(e.target.value);
    }, []);
    return [value, handler];
  };

  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      console.log({
        id,
        password,
        passwordCheck
      });
    },
    [password, passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">id</label>
          <br />
          <Input
            name="user-id"
            value={id}
            requred="true"
            onChange={onChangeId}
          />
        </div>
        <div>
          <label htmlFor="user-password">password</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            requred="true"
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">password check</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            requred="true"
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <div style={{ color: "red" }}>Password is not match.</div>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
