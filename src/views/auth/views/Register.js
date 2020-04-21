import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Button, Result,
} from 'antd';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
} from '@ant-design/icons';

const Register = ({ handleSubmit, isRegistering, isRegisterSuccess }) => {
  const onFinish = (values) => {
    handleSubmit(values);
  };

  return [
    <div key="div1">
      {isRegisterSuccess
        ? (
          <Result
            status="success"
            title="Welcome!"
            subTitle="Thanks for signing up! We just sent you an email to verify and complete your registration."
            extra={[
              <Button type="primary" style={{ width: '100%' }}>
                <Link to="resend-email">Resend Email Verification</Link>
              </Button>,
            ]}
          />
        )
        : (
          <div key="div2">
            <h2 key={1}>Register</h2>
            <Form
              onFinish={onFinish}
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="name"
                rules={[{
                  required: true,
                  message: 'Please input your name!',
                }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Name"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{
                  required: true,
                  message: 'Please input your Username!',
                }]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  type="email"
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  () => ({
                    validator(rule, value) {
                      const validation = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[`~!@#$%^&*)(+=,./?><';:])(?!.*["_]).{8,}$/;
                      if (!validation.test(value)) {
                        return Promise.resolve('Password must be at least 8 characters long and must contain at least 1 alphabet, 1 integer and 1 special character');
                      }
                      return Promise.reject();
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Confirm Password"
                />
              </Form.Item>
              <Form.Item>
                <Link
                  to="/user/forgot-password"
                  style={{ float: 'right' }}
                >
                  Forgot password
                </Link>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  loading={isRegistering}
                  disabled={isRegistering}
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: '100%' }}
                >
                  {isRegistering ? 'Registering Account...' : 'Register'}
                </Button>
                Or
                {' '}
                <Link to="/user/login">Login</Link>
              </Form.Item>
            </Form>
          </div>
        )}
    </div>,
  ];
};

Register.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isRegistering: PropTypes.bool.isRequired,
  isRegisterSuccess: PropTypes.bool.isRequired,
};

Register.defaultProps = {};

Register.styles = {};

export default Register;
