import React from "react";
import { Button, Input, Form, Card, Icon, Avatar } from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 'ellysalley', 
    },
    content: 'first tweet'
  }]
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && (
        <Form style={{ marginBotton: 20 }}encType="multipart/form-data">
          <Input.TextArea maxLength={140} placeholder="What's happening?" />
          <div>
            <input type="file" multiple hidden />
            <Button>Image Upload</Button>
            <Button type="primary" style={{ float: "right" }} htmlType="submit">
              Twit
            </Button>
          </div>
          <div>
            {dummy.imagePaths.map((v, i) => {
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
      )}
      {dummy.mainPosts.map(c => {
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
      })}
    </div>
  );
};

export default Home;