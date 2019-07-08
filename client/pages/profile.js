import React from "react";
import { Button, List, Card, Icon } from "antd";
import UsernameEditForm from '../components/UsernameEditForm';

const Profile = () => {
  return (
    <div>
      <UsernameEditForm />
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
    </div>
  );
};

export default Profile;
