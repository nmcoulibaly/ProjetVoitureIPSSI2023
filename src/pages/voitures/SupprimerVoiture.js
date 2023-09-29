import React, { useState } from "react";
import { Button, Toast } from "react-bootstrap";

const SupprimerVoiture = ({ voitureId, onDelete }) => {
    const [showToast, setShowToast] = useState(false);

    const handleDeleteConfirmation = () => {
        setShowToast(true);
    };

    const handleDelete = () => {
        onDelete();
        setShowToast(false);
    };

    return (
        <>
            <Button className="ms-5" variant="outline-danger" onClick={handleDeleteConfirmation}>
                Supprimer
            </Button>

            <Toast show={showToast} onClose={() => setShowToast(false)}>
                <Toast.Header>
                    <strong className="me-auto">Confirmation</strong>
                </Toast.Header>
                <Toast.Body>
                    Êtes-vous sûr de vouloir supprimer cette voiture ?
                    <div className="mt-2">
                        <Button variant="danger" onClick={handleDelete}>
                            Supprimer
                        </Button>{" "}
                        <Button className="mt-2" variant="secondary" onClick={() => setShowToast(false)}>
                            Annuler
                        </Button>
                    </div>
                </Toast.Body>
            </Toast>
        </>
    );
};

export default SupprimerVoiture;
