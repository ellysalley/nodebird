import React, { useCallback } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useInput } from "../pages/signup";

const LoginForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log({
      id, password,
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
    <div>
      <Button type="primary" htmlType="submit" loading={false}>
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