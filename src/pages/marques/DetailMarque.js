import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const DetailMarque = () => {
    const { brandID } = useParams();
    const [marque, setMarque] = useState({});
    const [voitures, setVoiture] = useState([]);
    useEffect(() => {
        axios.get(`https://formation.inow.fr/demo/api/v1/brands/${brandID}`).then((response) => {
            setMarque(response.data);
        }).catch((error) => {
            console.error('Error lors de la recuperation depuis API', error);
        });
        axios.get('https://formation.inow.fr/demo/api/v1/cars').then((response) => {
            const filteredVoitures = response.data.filter((voiture) => voiture.brandID == brandID);

            setVoiture(filteredVoitures);
            console.log(voitures);
        }).catch((error) => {
            console.error('Error lors de la recuperation depuis API', error);
        });
    }, [brandID])
    return (<>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>{marque.name}</h1>
                    <img
                        src={`/images/${marque.image}`}
                        alt={marque.name}
                        className="img-fluid"
                        style={{ width: '80px' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2>Voitures de la marque</h2>
                    <Row>
                        {voitures?.map((voiture) => (
                            <Col key={voiture.id} md={6}>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Body>
                                        <Card.Title>{voiture.model}</Card.Title>
                                        <Card.Text>
                                            <strong>Prix :</strong> {voiture.price} €
                                            <br />
                                            <strong>Date de circulation :</strong>{" "}
                                            {voiture.dateOfCirculation}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>

    </>);
}
export default DetailMarque;