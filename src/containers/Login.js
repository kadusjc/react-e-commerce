import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação
    onLogin({ name, password, email });
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">&#128100;</div>
          <h2>Bem-vindo</h2>
          <p className="login-subtitle">Faça login para acessar sua conta</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              className="userName"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br/>
          <Button className="btn" variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
