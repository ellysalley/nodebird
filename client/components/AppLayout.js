import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Avatar, Button, Card, Menu, Input, Row, Col } from "antd";

const dummy = {
  userid: 'elly',
  post: [],
  followings: [],
  followers: [],
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>nodebird</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Link href="/signup">
        <a>
          <Button>Sign up</Button>
        </a>
      </Link>
      <Row>
        <Col xs={24} md={6}>
          <Card
            actions={[
              <div key="twit">Twit<br />{dummy.post.length}</div>,
              <div key="following">Followings<br />{dummy.followings.length}</div>,
              <div key="follower">Followers<br />{dummy.followers.length}</div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{dummy.userid[0]}</Avatar>}
              title={dummy.userid}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          {children}           
        </Col>
        <Col xs={24} md={6}>third</Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.elementType,
};

export default AppLayout;
