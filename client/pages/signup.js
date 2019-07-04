import React, { useState, useCallback, useEffect } from "react";
import { Button, Form, Input } from "antd";
import PropTypes from "prop-types";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";

const TextInput = ({ value }) => (
  <div>{value}</div>
);

TextInput.propTypes = {
  value: PropTypes.string, 
};

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();
  const { isSigningUp, me } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      alert('logged in, go to main page.');
      Router.push('/');
    }
  }, [me && me.id]);

  const onSubmit = useCallback((e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      return dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          id, 
          password
        },
      });
    },
    [password, passwordCheck]
  );

  const onChangePasswordCheck = useCallback((e) => {
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
          <Button type="primary" htmlType="submit" loading={isSigningUp}>
            Sign Up
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
