import React from "react";
import { Button, Form, Input } from "antd";
import { useSelector } from "react-redux";

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post)
  return (
    <Form style={{ margin: "10px 0 20px" }} encType="multipart/form-data">
      <Input.TextArea maxLength={140} placeholder="What's happening?" />
      <div>
        <input type="file" multiple hidden />
        <Button>Image Upload</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          Twit
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={"https://localhost:3065/" + v}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>Delete</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
