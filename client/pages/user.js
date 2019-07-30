import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../components/PostCard';
import { Avatar, Card } from 'antd';
import { LOAD_USER_REQUEST } from '../reducers/user';

const User = ({ id }) => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);
  const { userInfo } = useSelector(state => state.user);

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
      data: id
    });
    dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: id
    });
  }, []);
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
  id: Proptypes.number.isRequired
};

Hashtag.getInitialProps = async context => {
  console.log('hashtag getInitialProps', context.guery.id);
  return { id: parseInt(context.query.id, 10) };
};

export default User;
