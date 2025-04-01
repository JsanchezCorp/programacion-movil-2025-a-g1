import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

interface CardTitleProps {
    title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
        </IonCard>
    );
};

export default CardTitle;