import React, { useState } from 'react';
import { IonPage, IonContent, IonItem, IonLabel, IonInput } from '@ionic/react';
import CardTitle from '../components/CardTitle';
import FormFields from '../components/FormFields';
import ActionButtons from '../components/ActionButtons';

interface ProfesorFormData {
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    especialidad: string;
    antiguedad: number;
}

const Profesor: React.FC = () => {
    const [formData, setFormData] = useState<ProfesorFormData>({
        nombre: '',
        apellido: '',
        edad: 0,
        correo: '',
        especialidad: '',
        antiguedad: 0
    });

    const handleAdd = () => {
        console.log('Agregar Profesor:', formData);
    };

    const handleModify = () => {
        console.log('Modificar Profesor:', formData);
    };

    const handleDelete = () => {
        console.log('Eliminar Profesor:', formData);
    };

    const handleConsult = () => {
        console.log('Consultar Profesor:', formData);
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <IonPage>
            <IonContent>
                <CardTitle title="Profesor" />
                <FormFields formData={formData} setFormData={setFormData} />
                <IonItem>
                    <IonLabel position="floating">Especialidad</IonLabel>
                    <IonInput name="especialidad" value={formData.especialidad} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Antigüedad</IonLabel>
                    <IonInput name="antiguedad" type="number" value={formData.antiguedad.toString()} onIonChange={handleChange} />
                </IonItem>
                <ActionButtons
                    onAdd={handleAdd}
                    onModify={handleModify}
                    onDelete={handleDelete}
                    onConsult={handleConsult}
                />
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </IonContent>
        </IonPage>
    );
};

export default Profesor;