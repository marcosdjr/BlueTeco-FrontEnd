import styled from "styled-components";
import { Container, Row, Nav, Navbar, Col } from "react-bootstrap";

const Header = styled.div`
  background-color: #0077c2;
  color: #fff;
  padding: 1rem 0;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  img {
    height: 7vw;
    display: flex;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-size:calc(15px + 5vw);
    color: #fff;
    text-align: center;
  }
  
  a {
    color:#fff;
    font-size:calc(15px + 1.5vw);
  }

  #image {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #nav {
    background-color: #42a5f5;
  }

`;

// const Social = styled.div`
//   font-size: 2rem;

//   a {
//     color: #fff;
//     margin: 0 0.15rem;
//     text-decoration: none;
//   }
// `;

export const HeaderH = () => {
  return (
    <Header>
      <Container fluid>
        <Row className="align-items-center">
          <Col id="image">
            <img alt="brinde" src="/images/brinde.png" />
          </Col>
          <Col>
            <h1>BlueTeco</h1>
          </Col>
          <Col id="image">
            <img alt="brinde" src="/images/brinde.png" />
          </Col>
        </Row>
        <Row>
          {/* <Navbar bg="primary" variant="dark"> */}
           
              <Nav id="nav" justify className="justify-content-center">
                <Nav.Item>
                  <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
              </Nav>
            
          {/* </Navbar> */}
        </Row>
      </Container>
    </Header>
  );
};
