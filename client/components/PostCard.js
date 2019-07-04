import React, { useState, useCallback, useEffect } from "react";
import { Card, Icon, Button, Avatar, Input, List } from "antd";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { me } = useSelector(state => state.user);
  const { commentAdded, isAddingComment } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const onToggleComment = useCallback(() => {
    setCommentFormOpend(prev => !prev);
  }, []);

  const onSubmitComment = useCallback((e) => {
    e.preventDefault();
    if (!me) {
      return alert('need to login');
    }
    return dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        postId: post.id,
      },
    });
  }, [me && me.id]);
  
  useEffect(() => {
    setCommentText('');
  }, [commentAdded === true]);

  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);
  
  return (
    <div>
    <Card
      key={+post.createAt}
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" onClick={onToggleComment} />,
        <Icon type="ellipsis" key="ellipsis" />
      ]}
      extra={<Button>Follow</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.User.username[0]}</Avatar>}
        title={post.User.username}
        description={post.content}
      />
    </Card>
    {commentFormOpened && (
      <>
        <Form onSubmit={onSubmitComment}>
          <Form.Item>
            <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
          </Form.Item>
          <Button type="primary" htmlType="submit">comment</Button>
        </Form>
        <List
          header={`${post.Comments ? post.Comments.length : 0} Comments`}
          itemLayout="horizontal"
          dataSource={post.Comments || []}
          renderItem={item => (
            <li>
              <Comment
                author={item.User.username}
                avatar={<Avatar>{item.User.username[0]}</Avatar>}
                content={item.content}
              />
            </li>
          )}
        />
      </>
    )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object,
  }),
};

export default PostCard;