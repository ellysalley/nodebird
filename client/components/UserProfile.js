import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";

const UserProfile = () => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST
    });
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">Twit<br />{me.Post.length}</div>,
        <div key="following">Followings<br />{me.Followings.length}</div>,
        <div key="follower">Followers<br />{me.Followers.length}</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.username[0]}</Avatar>}
        title={me.username}
      />
      <Button onClick={onLogout}>Log Out</Button>
    </Card>
  );
};

export default UserProfile;
