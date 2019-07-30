import React, { useCallback, useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(
    state => state.post
  );

  useEffect(() => {
    setText('');
  }, [postAdded === true]);

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      if (!text || !text.trim()) {
        return alert('Please update the post');
      }
      dispatch({
        type: ADD_POST_REQUEST,
        data: {
          content: text.trim()
        }
      });
    },
    [text]
  );

  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType="multipart/form-data"
      onSubmit={onSubmitForm}
    >
      <Input.TextArea
        maxLength={140}
        placeholder="What's happening?"
        value={text}
        onChange={onChangeText}
      />
      <div>
        <input type="file" multiple hidden />
        <Button>Image Upload</Button>
        <Button
          type="primary"
          style={{ float: 'right' }}
          htmlType="submit"
          loading={isAddingPost}
        >
          Twit
        </Button>
      </div>
      <div>
        {imagePaths.map(v => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img
              src={`https://localhost:8080/${v}`}
              style={{ width: '200px' }}
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
