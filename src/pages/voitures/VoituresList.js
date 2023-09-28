import { useEffect } from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from "react-router-dom";

const VoituresList = () => {
    const [voitures, setVoitures] = useState(null);
    const { brandID } = useParams();
    const handleShowCars = (brandID) => {
        axios.get(`https://formation.inow.fr/demo/api/v1/cars?brandID=${brandID}`).then((reponse) => {
            setVoitures({
                brandID: brandID,
                cars: reponse.data,
            });
        }).catch((error) => {
            console.error('Error is:', error);
        });
    }
    return (
        <Container>
            {voitures && voitures.cars && (
                <div>
                    <h2> Liste des voitures de la marque {setVoitures.brandID}</h2>
                    <ul>
                        {voitures.cars.map((car) => (
                            <li key={car.id}>
                                {car.model}

                            </li>
                        ))
                        }
                    </ul>
                </div>
            )}
        </Container>
    );
}
export default VoituresList;