import React from 'react';
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

interface ActionButtonsProps {
    onAdd: () => void;
    onModify: () => void;
    onDelete: () => void;
    onConsult: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onAdd, onModify, onDelete, onConsult }) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonButton expand="block" color="primary" onClick={onAdd}>Agregar</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton expand="block" color="secondary" onClick={onModify}>Modificar</IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton expand="block" color="danger" onClick={onDelete}>Eliminar</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton expand="block" color="warning" onClick={onConsult}>Consultar</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ActionButtons;