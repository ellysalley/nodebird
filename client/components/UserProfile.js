import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutAction);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          Twit
          <br />
          {user.post.length}
        </div>,
        <div key="following">
          Followings
          <br />
          {user.followings.length}
        </div>,
        <div key="follower">
          Followers
          <br />
          {user.followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.username[0]}</Avatar>}
        title={user.username}
      />
      <Button onClick={onLogout}>Log Out</Button>
    </Card>
  );
};

export default UserProfile;
