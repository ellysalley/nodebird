import React, { useCallback } from 'react';
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
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';

const Profile = () => {
  const dispatch = useDispatch();
  const { followingList, followerList, hasMoreFollower, hasMoreFollowing } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

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

  const loadMoreFollowings = useCallback(() => {
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
      offset: followingList.length,
    });
  }, []);

  const loadMoreFollowers = useCallback(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
      offset: followerList.length,
    });
  }, []);

  return (
    <div>
      <UsernameEditForm />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Followings</div>}
        loadMore={hasMoreFollowing && <Button style={{ width: '100%' }} onClick={loadMoreFollowings}>more</Button>}
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
        loadMore={hasMoreFollower && <Button style={{ width: '100%' }} onClick={loadMoreFollowers}>more</Button>}
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

Profile.getInitialProps = async context => {
  const state = context.store.getState();
  context.store.dispatch({
    type: LOAD_FOLLOWERS_REQUEST,
    data: state.user.me && state.user.me.id
  });
  context.store.dispatch({
    type: LOAD_FOLLOWINGS_REQUEST,
    data: state.user.me && state.user.me.id
  });
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: state.user.me && state.user.me.id
  });
};

export default Profile;
