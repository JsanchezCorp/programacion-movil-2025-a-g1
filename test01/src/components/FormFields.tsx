import React from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';

interface FormFieldsProps {
    formData: any; // Usa un tipo más específico si conoces la forma exacta de los datos
    setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const FormFields: React.FC<FormFieldsProps> = ({ formData, setFormData }) => {
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <IonItem>
                <IonLabel position="floating">Nombre</IonLabel>
                <IonInput name="nombre" value={formData.nombre} onIonChange={handleChange} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Apellido</IonLabel>
                <IonInput name="apellido" value={formData.apellido} onIonChange={handleChange} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Edad</IonLabel>
                <IonInput name="edad" type="number" value={formData.edad} onIonChange={handleChange} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Correo</IonLabel>
                <IonInput name="correo" type="email" value={formData.correo} onIonChange={handleChange} />
            </IonItem>
        </>
    );
};

export default FormFields;