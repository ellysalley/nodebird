import React from "react";
import { Card, Avatar } from "antd";

const UserProfile = () => {
  return (
    <Card
              actions={[
                <div key="twit">
                  Twit
                  <br />
                  {dummy.post.length}
                </div>,
                <div key="following">
                  Followings
                  <br />
                  {dummy.followings.length}
                </div>,
                <div key="follower">
                  Followers
                  <br />
                  {dummy.followers.length}
                </div>
              ]}
            >
              <Card.Meta
                avatar={<Avatar>{dummy.userid[0]}</Avatar>}
                title={dummy.userid}
              />
            </Card>
  )
};

export default UserProfile;