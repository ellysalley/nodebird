import React from 'react';
import Proptypes from "prop-types";

const User = ({ id }) => {
  return (
    <div>user</div>
  );
};

User.propTypes = {
  id: Proptypes.number.isRequired,
};
Hashtag.getInitialProps = async (context) => {
  console.log('hashtag getInitialProps', context.guery.id);
  return { id: parseInt(context.query.id, 10)}
};

export default User;