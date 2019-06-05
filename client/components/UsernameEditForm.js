import React from 'react';
import { Button, Form, Input } from 'antd';

const UsernameEditForm = () => {
  return (
    <Form
    style={{
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px"
    }}
  >
    <Input addonBefore="Name" />
    <Button type="primary">Edit</Button>
  </Form>
  )
}

export default UsernameEditForm;