import { useContext } from "react";
import { Button, Container, Form, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const Menu = () => {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">Accueil</Link>
                        <Link to={'/voitures'} className="nav-link">Voitures</Link>
                    </Nav>
                    <Form inline>
                        <Row className="align-items-center">
                            <Col xs="auto">
                                <Button type="submit">Connexion</Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;