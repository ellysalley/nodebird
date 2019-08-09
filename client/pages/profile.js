import React, { useEffect, useCallback } from 'react';
import { Button, List, Card, Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import UsernameEditForm from '../components/UsernameEditForm';
import PostCard from '../components/PostCard';
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  UNFOLLOW_USER_REQUEST,
  REMOVE_FOLLOWER_REQUEST
} from '../reducers/user';

const Profile = () => {
  const dispatch = useDispatch();
  const { me, followingList, followerList } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  useEffect(() => {
    if (me) {
      dispatch({
        type: LOAD_FOLLOWERS_REQUEST,
        data: me.id
      });
      dispatch({
        type: LOAD_FOLLOWINGS_REQUEST,
        data: me.id
      });
    }
  }, [me && me.id]);

  const onUnfollow = useCallback(
    userId => () => {
      dispatch({
        type: UNFOLLOW_USER_REQUEST,
        data: userId
      });
    },
    []
  );

  const onRemoveFollower = useCallback(
    userId => () => {
      dispatch({
        type: REMOVE_FOLLOWER_REQUEST,
        data: userId
      });
    },
    []
  );

  return (
    <div>
      <UsernameEditForm />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Followings</div>}
        loadMore={<Button style={{ width: '100%' }}>more</Button>}
        bordered
        dataSource={followingList}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
            <Card
              actions={[
                <Icon key="stop" type="stop" onClick={onUnfollow(item.id)} />
              ]}
            >
              <Card.Meta description={item.username} />
            </Card>
          </List.Item>
        )}
      />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Followers</div>}
        loadMore={<Button style={{ width: '100%' }}>more</Button>}
        bordered
        dataSource={followerList}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
            <Card
              actions={[
                <Icon
                  key="stop"
                  type="stop"
                  onClick={onRemoveFollower(item.id)}
                />
              ]}
            >
              <Card.Meta description={item.username} />
            </Card>
          </List.Item>
        )}
      />
      <div>
        {mainPosts.map(c => (
          <PostCard key={+c.createdAt} post={c} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
