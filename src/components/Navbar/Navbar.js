import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
export default function NavBar() {
  return (


    <>

      <>
        <Navbar bg="dark" variant="dark">
          <Container >
            <Navbar.Brand href="#home">Netflix-Clone</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favList">FavList Movies</Nav.Link>
              <Nav.Link href="#pricing">New Movies</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </>

    </>
  );
}