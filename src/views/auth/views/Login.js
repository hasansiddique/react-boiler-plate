import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Button,
} from 'antd';
import { Link } from 'react-router-dom';

const Login = ({ handleSubmit, isLoggingIn }) => {
  const onFinish = (values) => {
    handleSubmit(values);
  };
  return [
    <h2 key={1}>Login</h2>,
    <Form
      onFinish={onFinish}
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="email"
        rules={[{
          required: true,
          message: 'Please input your Username!',
        }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{
          required: true,
          message: 'Please input your Password!',
        }]}
      >
        <Input.Password
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>

        <Link to="/user/forgot-password" href="/user/forgot-password" style={{ float: 'right' }}>
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button
          loading={isLoggingIn}
          disabled={isLoggingIn}
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: '100%' }}
        >
          {isLoggingIn ? 'Logging...' : 'Log in'}
        </Button>
        Or
        {' '}
        <Link to="/user/register" href="/user/register">Register</Link>
      </Form.Item>
    </Form>,
  ];
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

Login.defaultProps = {};

Login.styles = {};

export default Login;
