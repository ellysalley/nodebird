import React from "react";
import { Card, Icon, Button, Avatar } from "antd";

const PostCard = () => {
  return (
    <Card
      key={+c.createAt}
      cover={c.img && <img alt="example" src={c.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
      extra={<Button>Follow</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{c.User.id[0]}</Avatar>}
        title={c.User.id}
        description={c.content}
      />
    </Card>
  );
};
export default PostCard;
