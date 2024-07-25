import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

interface LoginProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Received values:', values);
    if (values.username === 'admin' && values.password === 'admin') {
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Login</h2>
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Lembrar-me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Link to="/">Esqueceu a senha?</Link>
          <Link to="/">Criar conta</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
