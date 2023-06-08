import '../Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PageNav() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
      >
        <Container className="navbar-container">
          <Navbar.Brand href="#home">uLessonLogo</Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link href="#home">ulesson</Nav.Link>
            <Nav.Link href="#features">ulesson</Nav.Link>
            <Nav.Link href="#pricing">ulesson</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default PageNav;
