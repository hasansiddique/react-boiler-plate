import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Form, Input, Button, Checkbox,
} from 'antd';

const FormItem = Form.Item;

const Login = ({ handleSubmit, isLoggingIn, form }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        handleSubmit(values);
      }
    });
  };
  const { getFieldDecorator } = form;
  return [
    <h2 key={1}>Login</h2>,
    <Form key={2} onSubmit={onSubmit}>
      <FormItem className="form-item">
        {getFieldDecorator('email', {
          rules: [{
            required: true,
            message: 'Please input your Email Address!',
          }],
        })(<Input
          size="large"
          // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
        />)}
      </FormItem>
      <FormItem className="form-item">
        {getFieldDecorator('password', {
          rules: [{
            required: true,
            message: 'Please input your Password!',
          }],
        })(<Input
          size="large"
          // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />)}
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox style={{ float: 'left' }}>Remember me</Checkbox>)}

        <Link to="/user/register" href="/user/forgot-password" style={{ float: 'right' }}>Forgot password</Link>
        <Button size="large" loading={isLoggingIn} style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
          {isLoggingIn ? 'Authenticating...' : 'Log in' }
        </Button>
        Or
        {' '}
        <Link to="/user/register" href="/user/register">
          Register
          {handleSubmit}
        </Link>
      </FormItem>
    </Form>,
  ];
};

Login.propTypes = {
  form: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

Login.defaultProps = {};

Login.styles = {};

const LoginForm = Form.create()(Login);
export default LoginForm;
