import { useEffect } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";
const MarquesList = () => {
    const [marques, setMarques] = useState([]);
    useEffect(() => {
        axios.get(' https://formation.inow.fr/demo/api/v1/brands').then((response) => {
            setMarques(response.data);
        }).catch((error) => {
            console.error('Error is:', error);
        })
    }, []);
    return (
        <Container>
            <Row>
                {marques?.map((marque) => (
                    <Col key={marque.id}>
                        <Card style={{ width: '18rem', margin: '20px' }}>
                            <Card.Img variant="top" src={`images/${marque.image}`} />
                            <Card.Body className="card-with-margin">
                                <Card.Title>{marque.name}</Card.Title>
                                <Link to={`/marques/detail/${marque.id}`} className="btn btn-primary">Detail
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default MarquesList;