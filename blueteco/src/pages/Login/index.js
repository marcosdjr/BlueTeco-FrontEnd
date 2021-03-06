import styled from "styled-components";
import { Form, Container, Col } from 'react-bootstrap';
import { PageTitle } from '../../components/PageTitle';
import { HeaderH } from '../../components/Header';
import { ButtonB } from '../../components/Button';
import { Log } from "../../components/FormArea";

import { useState } from 'react';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputLogin = {
      email,
      password,
    };

    axios
      .post('/auth', inputLogin)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log(response);
        alert("Usuário logado!");
        setEmail("");
        setPassword("");


      })
      .catch((error) => {
        console.log(error.response.data.message);
        alert(error.response.data.message);
      });
  };


  return (
    <Container fluid>
      <HeaderH />
      <Log>

      <Col lg={4} md={6} xs={12}>
      <PageTitle>Acessar BlueTeco</PageTitle>
      <Form 
      onSubmit={handleSubmit}
    >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Digite o email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            />
        </Form.Group>
        <div className="d-grid gap-2">
        <ButtonB >
          Login
        </ButtonB>
        </div>
      </Form>
    </Col>
    </Log>
    </Container>
  );
};
