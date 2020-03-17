import React from 'react';
import PropTypes from 'prop-types';

const ForgotPassword = ({ handleSubmit }) => {
  return (
    <div>
      hello
      {' '}
      {handleSubmit}
    </div>
  );
};

ForgotPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

ForgotPassword.defaultProps = {};

ForgotPassword.styles = {};

export default ForgotPassword;
