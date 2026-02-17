import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar fixed="top" expand="lg" variant="dark" className="navbar-dark-bg">
      <Container fluid="lg">
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <img
            src="/assets/golden-fork-logo.avif"
            alt="Golden Fork Logo"
            width={40}
            height={40}
          />
          <span className="fw-bold text-white">Golden Fork</span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto gap-lg-3 align-items-lg-center">
            <Nav.Link className="nav-bright" href="#menu">
              Menu
            </Nav.Link>

            <Nav.Link className="nav-bright" href="#packages">
              Packages
            </Nav.Link>

         <Nav.Link
  href="https://www.instagram.com/goldenfork_ireland/"
  target="_blank"
  rel="noreferrer"
  className="nav-instagram"
>
  <i className="bi bi-instagram instagram-icon"></i>
</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
