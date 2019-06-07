import React from "react";
import { Card, Avatar } from "antd";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector(state => state.user);
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
    </Card>
  );
};

export default UserProfile;
