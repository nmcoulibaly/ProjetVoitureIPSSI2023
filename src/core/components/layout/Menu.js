import { Button, Container, Form, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">Home</Link>
                        <Link to={'/cars'} className="nav-link">Voiture</Link>
                    </Nav>
                    <Form inline>
                        <Row className="align-items-center">
                            <Col xs="auto" className="ml-auto">
                                <Form.Control type="text" placeholder="Login" className="mr-sm-2" />
                            </Col>
                            <Col xs="auto" className="ml-auto">
                                <Form.Control type="text" placeholder="Mot de passe" className="mr-sm-2" />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;