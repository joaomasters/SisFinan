import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

interface LoginProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Received values:', values);
    if (values.email === 'admin' && values.password === 'admin') {
      setIsLoggedIn(true);
      navigate('/dashboard');
    } else {
      alert('E-mail ou senha inválidos.');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Login</h2>
      <Form
        name="login"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'E-mail obrigatório' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Senha obrigatória' }]}
        >
          <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Senha"
        />
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
