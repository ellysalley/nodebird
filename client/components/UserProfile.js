import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Card
      actions={[
        <Link href="/profile" key="tweet">
          <a>
            <div>Tweet<br />{me.Posts.length}</div>
          </a>
        </Link>,
        <Link href="/profile" key="following">
          <a>
            <div>Followings<br />{me.Followings.length}</div>
          </a>
        </Link>,
        <Link href="/profile" key="follower">
          <a>
            <div>Followers<br />{me.Followers.length}</div>
          </a>
        </Link>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.username[0]}</Avatar>}
        title={me.username}
      />
      <Button onClick={onLogout}>Log out</Button>
    </Card>
  );
};

export default UserProfile;