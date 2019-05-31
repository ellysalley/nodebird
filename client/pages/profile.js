import React from "react";
import { Form, Input, Button, List, Card, Icon } from "antd";

const Profile = () => {
  return (
    <div>
      <Form
        style={{
          marginBottom: "20px",
          border: "1px solid #d9d9d9",
          padding: "20px"
        }}
      >
        <Input addonBefore="Name" />
        <Button type="primary">Edit</Button>
      </Form>
      <List
        style={{ marginBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Followers</div>}
        loadMore={<Button style={{ width: "100%" }}>more</Button>}
        bordered
        dataSource={["ab", "cde", "fgeds"]}
        renderItem={item => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<Icon key="stop" type="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      />
      <List
        style={{ marginBottom: "20px" }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Followings</div>}
        loadMore={<Button style={{ width: "100%" }}>more</Button>}
        bordered
        dataSource={["ab", "cde", "fgeds"]}
        renderItem={item => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card actions={[<Icon key="stop" type="stop" />]}>
              <Card.Meta description={item} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Profile;
