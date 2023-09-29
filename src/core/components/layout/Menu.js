import { useContext } from "react";
import { Button, Container, Form, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";

const Menu = () => {
    const [user, setUser] = useContext(UserContext);

    const logout = () => {
        setUser(undefined);
        sessionStorage.removeItem('USER');
    }

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
                            <Col xs="auto">
                                {user ? (
                                    <>
                                        <span style={{ color: 'white' }}>
                                        Bonjour {user.firstname} {user.lastname}
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        </span>
                                        <Button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={logout}
                                        >
                                        Se déconnecter
                                        </Button>
                                    </>
                                    ) : (
                                    <Link to="/auth/login">
                                        <Button type="button" className="btn btn-secondary">Se connecter</Button>
                                    </Link>
                                )}
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;