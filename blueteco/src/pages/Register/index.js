import styled from "styled-components";
import { Form, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { HeaderH } from "../../components/Header";
import { ButtonB } from "../../components/Button";
import { Reg } from "../../components/FormArea";

import axios from "axios";


export const Register = () => {

   

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const User = {
      email,
      firstName,
      birthDate: new Date(birthDate).toJSON(),
      password,
      role,
    };

    console.log(User);

    axios
      .post("/users", User)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  return (
    <Container fluid>
      <HeaderH />
      <Reg>
        <Col lg={4} md={6} xs={12}>
          <PageTitle>Registrar usuário</PageTitle>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Col}>
              <Form.Label>Digite um email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Row>
              <Form.Group as={Col}>
                <Form.Label>Digite seu nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nome"
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                onChange={(event) => setBirthDate(event.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Tipo de cadastro: Usuário/Colaborador</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu tipo de cadastro"
                onChange={(event) => setRole(event.target.value)}
              />
            </Form.Group>

            <Row>
              <Form.Group as={Col}>
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
            </Row>
            <div id="ButtonB">
              <ButtonB />
            </div>
          </Form>
        </Col>
      </Reg>
    </Container>
  );
};
