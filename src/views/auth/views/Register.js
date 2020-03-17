import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Form, Input, Button,
} from 'antd';

const FormItem = Form.Item;

const Register = ({ handleSubmit, isLoggingIn, form }) => {
  let confirmDirty = false;
  const handleConfirmBlur = (e) => {
    const { value } = e.target;
    confirmDirty = (confirmDirty || !!value);
  };
  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };
  const validateToNextPassword = (rule, value, callback) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

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
    <h2 key={1}>Register</h2>,
    <Form key={2} onSubmit={onSubmit}>
      <FormItem className="form-item">
        {getFieldDecorator('name', {
          rules: [{
            required: true,
            message: 'Please input your Name!',
          }],
        })(<Input
          size="large"
          // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Name"
        />)}
      </FormItem>
      <FormItem className="form-item">
        {getFieldDecorator('email', {
          rules: [{
            required: true,
            message: 'Please input your Email Address!',
          }],
        })(<Input
          size="large"
          // prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
        />)}
      </FormItem>
      <FormItem className="form-item">
        {getFieldDecorator('password', {
          rules: [{
            required: true,
            message: 'Please input your password!',
          }, {
            validator: validateToNextPassword,
          }],
        })(<Input
          size="large"
          // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />)}
      </FormItem>
      <FormItem className="form-item">
        {getFieldDecorator('confirm', {
          rules: [{
            required: true,
            message: 'Please confirm your password!',
          }, {
            validator: compareToFirstPassword,
          }],
        })(<Input
          size="large"
          // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Confirm Password"
          onBlur={handleConfirmBlur}
        />)}
      </FormItem>
      <FormItem>
        <Link to="/user/register" href="/user/forgot-password" style={{ float: 'right' }}>
          Forgot password
        </Link>
        <Button
          size="large"
          loading={isLoggingIn}
          style={{ width: '100%' }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          {isLoggingIn ? 'Authenticating...' : 'Log in'}
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

Register.propTypes = {
  form: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

Register.defaultProps = {};

Register.styles = {};

const RegisterForm = Form.create()(Register);
export default RegisterForm;
