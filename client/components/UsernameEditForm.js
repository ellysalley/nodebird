import React, { useCallback, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_USERNAME_REQUEST } from '../reducers/user';

const UsernameEditForm = () => {
  const [editedName, setEditedName] = useState();
  const dispatch = useDispatch();
  const { me, isEditingUsername } = useSelector(state => state.user);

  const onChangeUsername = useCallback(e => {
    setEditedName(e.target.value);
  }, []);

  const onEditUsername = useCallback(
    e => {
      e.preventDefault();
      dispatch({
        type: EDIT_USERNAME_REQUEST,
        data: editedName
      });
    },
    [editedName]
  );

  return (
    <Form
      style={{
        marginBottom: '20px',
        border: '1px solid #d9d9d9',
        padding: '20px'
      }}
      onSubmit={onEditUsername}
    >
      <Input
        addonBefore="Username"
        value={editedName || (me && me.username)}
        onChange={onChangeUsername}
      />
      <Button type="primary" htmlType="submit" loading={isEditingUsername}>
        Edit
      </Button>
    </Form>
  );
};

export default UsernameEditForm;
