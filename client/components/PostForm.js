import React, { useCallback, useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ADD_POSTS_REQUEST } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post)

  useEffect(() => {
    setText('')
  }, [postAdded === true]);

  const onSubmitForm = useCallback(() => {
    e.preventDefault();
    dispatch({
      type: ADD_POSTS_REQUEST, 
      data: {
        text, 
      }
    })
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <Form style={{ margin: "10px 0 20px" }} encType="multipart/form-data" onSubmit={onSubmitForm}>
      <Input.TextArea maxLength={140} placeholder="What's happening?" value={text} onChange={onChangeText} />
      <div>
        <input type="file" multiple hidden />
        <Button>Image Upload</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit" isLoading={isAddingPost}>
          Twit
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
            <div key={v} style={{ display: "inline-block" }}>
              <img
                src={`https://localhost:3065/${v}`}
                style={{ width: "200px" }}
                alt={v}
              />
              <div>
                <Button>Delete</Button>
              </div>
            </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;