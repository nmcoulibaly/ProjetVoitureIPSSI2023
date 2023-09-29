import React, { useState, useEffect } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import axios from "axios";

const ModifierVoiture = ({ voitureId, onUpdate }) => {
    const [voiture, setVoiture] = useState({});
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [dateOfCirculation, setDateOfCirculation] = useState("");
    const [modificationReussie, setModificationReussie] = useState(false);
    const [showConfirmationToast, setShowConfirmationToast] = useState(false);

    useEffect(() => {
        axios
            .get(`https://formation.inow.fr/demo/api/v1/cars/${voitureId}`)
            .then((response) => {
                setVoiture(response.data);
                setModel(response.data.model);
                setPrice(response.data.price);
                setDateOfCirculation(response.data.dateOfCirculation);
            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des détails de la voiture :", error);
            });
    }, [voitureId]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const voitureMiseAJour = {
            model,
            price,
            dateOfCirculation,
        };

        axios
            .put(`https://formation.inow.fr/demo/api/v1/cars/${voitureId}`, voitureMiseAJour)
            .then((response) => {
                console.log("Voiture mise à jour avec succès !", response.data);
                setModificationReussie(true);
                onUpdate();
                setShowConfirmationToast(false); // Fermez le toast après la mise à jour réussie
            })
            .catch((error) => {
                console.error("Erreur lors de la mise à jour de la voiture :", error);
            });
    };

    const handleShowConfirmationToast = () => {
        setShowConfirmationToast(true);
    };

    return (
        <div>
            <h3>Modifier la voiture</h3>
            {modificationReussie ? (
                <p>Modification réussie !</p>
            ) : (
                <>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group controlId="model">
                            <Form.Label>Modèle</Form.Label>
                            <Form.Control
                                type="text"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Prix</Form.Label>
                            <Form.Control
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="dateOfCirculation">
                            <Form.Label>Date de circulation</Form.Label>
                            <Form.Control
                                type="date"
                                value={dateOfCirculation}
                                onChange={(e) => setDateOfCirculation(e.target.value)}
                            />
                        </Form.Group>
                        <Button className="mt-2" variant="outline-danger">
                            Modifier
                        </Button>
                    </Form>
                    <Toast
                        show={showConfirmationToast}
                        onClose={() => setShowConfirmationToast(false)}
                    >
                        <Toast.Header>
                            <strong>Confirmation</strong>
                        </Toast.Header>
                        <Toast.Body>
                            Voulez-vous vraiment modifier cette voiture ?
                            <div className="d-grid gap-2 mt-3">
                                <Button variant="success" onClick={handleUpdate}>
                                    Oui
                                </Button>
                                <Button variant="danger" onClick={() => setShowConfirmationToast(false)}>
                                    Non
                                </Button>
                            </div>
                        </Toast.Body>
                    </Toast>
                </>
            )}
        </div>
    );
};

export default ModifierVoiture;
