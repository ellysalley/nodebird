import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card } from 'antd';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../components/PostCard';

const User = ({ id }) => {
  const { mainPosts } = useSelector(state => state.post);
  const { userInfo } = useSelector(state => state.user);

  return (
    <div>
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              twit
              <br />
              {userInfo.Posts}
            </div>,
            <div key="following">
              following
              <br />
              {userInfo.Followings}
            </div>,
            <div key="follower">
              Followers
              <br />
              {userInfo.Followers}
            </div>
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{userInfo.username[0]}</Avatar>}
            title={userInfo.username}
          />
        </Card>
      ) : null}
      {mainPosts.map(c => (
        <PostCard key={+c.createdAt} post={c} />
      ))}
    </div>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired
};

User.getInitialProps = async (context) => {
  const id = parseInt(context.query.id, 10);
  console.log('user getInitialProps', id);
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: id,
  });
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: id,
  });
  return { id };
};

export default User;
