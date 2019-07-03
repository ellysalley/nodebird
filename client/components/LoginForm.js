import React, { useCallback } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../pages/signup";
import { LOG_IN_REQUEST } from "../reducers/user";

const LoginForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        id, password
      },
    });
  }, [id, password]);

  return (
    <Form>
    <div>
      <label htmlFor="user-id">id</label>
      <br />
      <Input
        name="user-id"
        value={id}
        onChange={onChangeId}
        required={true}
      />
    </div>
    <div>
      <label htmlFor="user-password">password</label>
      <br />
      <Input
        name="user-password"
        value={password}
        onChange={onChangePassword}
        type="password"
        required={true}
      />
    </div>
    <div style={{ marginTop: '10px'}}>
      <Button type="primary" htmlType="submit" loading={isLoggingIn}>
        Sign In
      </Button>
      <Link href="/signup">
        <a>
          <Button>Sign Up</Button>
        </a>
      </Link>
    </div>
  </Form>
  );
}

export default LoginForm;