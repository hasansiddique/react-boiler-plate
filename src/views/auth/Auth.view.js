import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FETCHING } from '../../common/constants';

const Authentication = ({ loginUser, requestingLogin }) => {
  useEffect(async () => {
    loginUser({
      username: 'faiz@wanclouds.net',
      password: 'khanfaiz',
    });
  }, [loginUser]);

  return (
    <div id="auth">
      <div className="auth-wrapper">
        <section className="auth-content">

          <div className="auth-logo">
            <img src="" alt="NetOrc by Wanclouds" height={100} />
          </div>

          <div className="auth-component">
            {requestingLogin === FETCHING ? 'Fetching...' : 'Hello'}
          </div>

        </section>
        <footer className="auth-footer">
          Copyright 2018. Wanclouds, Inc.
        </footer>
      </div>
    </div>
  );
};

Authentication.defaultProps = {};

Authentication.propTypes = {
  loginUser: PropTypes.func.isRequired,
  requestingLogin: PropTypes.bool.isRequired,
};

Authentication.styles = {
  layout: {},
};

export default Authentication;
