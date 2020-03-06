import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Auth = ({ getUser }) => {
  useEffect(() => {
    getUser({
      password: 'fbr@123',
      user_type_id: 1,
      userName: 'hasan.wanclouds@gmail.com',
    })
      .then((res) => {
        console.log(res);
      });
  });

  return (
    <div>
      Hello Auth
    </div>
  );
};

Auth.styles = {};

Auth.propTypes = {
  getUser: PropTypes.func.isRequired,
};

Auth.defaultProps = {};

export default Auth;
