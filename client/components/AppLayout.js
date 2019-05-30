import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Avatar, Button, Card, Menu, Input, Row, Col } from "antd";
import LoginForm from "./LoginForm";

const dummy = {
  userid: "elly",
  post: [],
  followings: [],
  followers: [],
  isLoggedIn: true
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
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? (
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
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
        <Link href="https://www.ellysalley.com" ><a target="_blank">Made by ellysalley</a></Link>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.elementType
};

export default AppLayout;