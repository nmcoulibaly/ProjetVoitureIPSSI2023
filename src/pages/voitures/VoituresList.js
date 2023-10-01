import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';
import AjoutVoiture from "./AjoutVoiture";
import { Link } from "react-router-dom";
import SupprimerVoiture from "./SupprimerVoiture";
import ModifierVoiture from "./ModifierVoiture";
import axios from "axios";

const VoituresList = () => {
    const [voitures, setVoitures] = useState([]);
    const [marques, setMarques] = useState({});
    const [showAjouterVoiture, setShowAjouterVoiture] = useState(false);
    const [voituresEnModification, setVoituresEnModification] = useState({});

    const ajouterNouvelleVoiture = (nouvelleVoiture) => {
        setVoitures([...voitures, nouvelleVoiture]);
    };

    const handleAjoutTermine = () => {
        setShowAjouterVoiture(false);
    };

    const chargerListeVoitures = () => {
        // Fonction pour charger la liste de voitures depuis l'API
        axios
            .get("https://formation.inow.fr/demo/api/v1/cars")
            .then((response) => {
                setVoitures(response.data);
            })
            .catch((error) => {
                console.error("Error lors de la recuperation depuis API", error);
            });
    };
    const handleDeleteVoiture = (voitureId) => {
        // Effectuez la suppression de la voiture en utilisant l'API
        axios
            .delete(`https://formation.inow.fr/demo/api/v1/cars/${voitureId}`)
            .then((response) => {
                console.log("Voiture supprimée avec succès !");
                // Mettez à jour la liste de voitures pour refléter la suppression
                chargerListeVoitures();
            })
            .catch((error) => {
                console.error("Erreur lors de la suppression de la voiture :", error);
            });
    };

    useEffect(() => {
        // Chargez la liste de voitures lorsque le composant est monté
        chargerListeVoitures();

        axios
            .get("https://formation.inow.fr/demo/api/v1/brands")
            .then((response) => {
                // Créez un objet de marques avec l'ID comme clé
                const brandsObject = {};
                response.data.forEach((marque) => {
                    brandsObject[marque.id] = marque.name;
                });
                setMarques(brandsObject);
            })
            .catch((error) => {
                console.error("Error lors de la recuperation depuis API", error);
            });
    }, []);

    return (
        <>
            <Link to={'/voitures/ajout'}> <Button className="m-4" > <MDBIcon icon="car" className="me-2" />Ajouter</Button></Link>
            <h3 style={{ textAlign: "center" }}>Nos Voitures </h3>
            <Row>
                {voitures?.map((voiture) => (
                    <Col key={voiture.id}>
                        <Card style={{ width: "20rem", marginBottom: "10px", marginLeft: "40px" }}>
                            <Card.Body>
                                <Card.Title>{voiture.model}</Card.Title>
                                <Card.Text>
                                    <strong>Prix :</strong> {voiture.price} €
                                    <br />
                                    <strong>Marque :</strong> {marques[voiture.brandID]}
                                </Card.Text>
                                <div className="d-flex align-items-center ">
                                    {voituresEnModification[voiture.id] ? (
                                        <ModifierVoiture
                                            className="ms-2"
                                            voitureId={voiture.id}
                                            onUpdate={chargerListeVoitures}
                                        />
                                    ) : (
                                        <>
                                            <Button
                                                className="ms-2"
                                                variant="outline-warning"
                                                onClick={() =>
                                                    setVoituresEnModification({
                                                        ...voituresEnModification,
                                                        [voiture.id]: true,
                                                    })
                                                }
                                            >
                                                Modifier
                                            </Button>
                                            <SupprimerVoiture
                                                voitureId={voiture.id}
                                                onDelete={() => handleDeleteVoiture(voiture.id)} // Appel de la fonction avec l'ID de la voiture
                                            />
                                        </>
                                    )}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {showAjouterVoiture && (
                <AjoutVoiture
                    onAjouterVoiture={ajouterNouvelleVoiture}
                />
            )}
        </>
    );
};

export default VoituresList;
