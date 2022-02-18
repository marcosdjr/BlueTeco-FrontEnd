// import { Slider } from '../../components/Slider/index';
import { HeaderH } from "../../components/Header";
import { CardS, CardId, RowCenter } from "../../components/FormArea";
import { useParams } from "react-router-dom";
// import { info } from '../../constants/slider';
import { Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getTableById} from "../../Api";

import axios from "axios";

export const Table = () => {
  const [tables, setTables] = useState({});
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);
  // const getData = async () => {
  //   await axios.get('/table').then((response) => {
  //     setTables(response.data);
  //   });
  // };
  useEffect(() => {
    setLoading(false)
  }, [loading]) 

  const USER_TOKEN = localStorage.getItem("token");
  const AuthStr = "Bearer ".concat(USER_TOKEN);
  const URL = "http://localhost:3000/table";
  const { id } = useParams();

  
  const getDataOne = () => {
    // axios
    //   .get(`${URL}` + `/${id}`, { headers: { Authorization: AuthStr } })
    //   .then((response) => {
    //     setTables(response.data);
    //     console.log(response)
    //   });

    


  };
  console.log(AuthStr)

  useEffect(() => {
    if
    ( tables !== {}){
      tables.users.map((user) => {
        setUser(user)
      })
    }
   
    console.log(user)
  }, [tables]);

  useEffect(() => {
    getTableById (id)
    .then ((response) => {
      setLoading(true);
      setTables(response.data);

      console.log(response);
      console.log(tables);
      console.log(loading);
    })


    getDataOne();
  }, []);

if (tables) {
  console.log(tables)
}

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

      <Row className="align-items-center">
        <Col lg={4} md={6} xs={12} >
          <CardS>
            <a href={`/table/${id}`} key={id}>
              <Card>
                <Card.Body>
                  <Card.Title>Mesa: {tables.number}</Card.Title>
                  {/* <ListGroup>
                  {tables?tables.users.map((user) => (<ListGroupItem key={Math.random()} variant="primary">Usuário: {user.firstName}</ListGroupItem>)):null}
                  </ListGroup> */}
                  {/* {tables?tables.menus.map((item) => (
                    <ListGroup>
                      <ListGroupItem variant="info">Nº: {item.id}</ListGroupItem>
                      <ListGroupItem>Item: {item.item}</ListGroupItem>
                      <ListGroupItem >Preço: {item.price}</ListGroupItem>
                    </ListGroup>
                  )):null} */}

                  <ListGroup>
                    <ListGroupItem variant="success">Valor Total: {tables.total}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            </a>
          </CardS>
        </Col>
      </Row>
    </>
  );
};
