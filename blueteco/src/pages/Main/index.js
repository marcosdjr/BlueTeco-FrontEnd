// import { Slider } from '../../components/Slider/index';
import { HeaderH } from "../../components/Header";
import { CardS } from "../../components/FormArea";

// import { info } from '../../constants/slider';
import {
  Container,
  Card,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useState, useEffect } from "react";

import axios from "axios";

export const Main = () => {
  const [tables, setTables] = useState([]);

  // const getData = async () => {
  //   await axios.get('/table').then((response) => {
  //     setTables(response.data);
  //   });
  // };

  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const URL = "http://localhost:3000";

  const getData = async () => {
    await axios
      .get(URL + "/table", { headers: { Authorization: AuthStr } })
      .then((response) => {
        setTables(response.data);
      });
  };
  console.log(tables);
  useEffect(() => {
    getData();
  }, []);

  // const baseURL = 'http://localhost:3000';

  // const getData = async () => {
  //   return await axios ({
  //     method: "post",
  //     url: baseURL + "table",
  //     data: {

  //     },
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer" + localStorage.getItem("token"),
  //     },
  //   });
  // };

  return (
    <>
      {/* <Slider data={info} /> */}
      <HeaderH />
      <Row>
        {tables.map((item) => (
          <Col lg={4} md={6} xs={12} key={Math.random()}>
            <CardS>
              <a href={`/table/${item.id}`} key={item.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>Mesa: {item.number}</Card.Title>
                    <ListGroup>
                      {/* <ListGroupItem>Mesa: {item.number}</ListGroupItem> */}
                      {item.users.map((user) => (
                        <ListGroupItem>Usuário: {user.firstName}</ListGroupItem>
                      ))}
                      <ListGroupItem>Valor Total: {item.total}</ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </a>
            </CardS>
          </Col>
        ))}
      </Row>
    </>
  );
};
