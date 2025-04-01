import React, { useState } from 'react';
import { IonPage, IonContent, IonItem, IonLabel, IonInput } from '@ionic/react';
import CardTitle from '../components/CardTitle';
import FormFields from '../components/FormFields';
import ActionButtons from '../components/ActionButtons';

interface EstudianteFormData {
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    matricula: string;
    carrera: string;
}

const Estudiante: React.FC = () => {
    const [formData, setFormData] = useState<EstudianteFormData>({
        nombre: '',
        apellido: '',
        edad: 0,
        correo: '',
        matricula: '',
        carrera: ''
    });

    const handleAdd = () => {
        console.log('Agregar Estudiante:', formData);
    };

    const handleModify = () => {
        console.log('Modificar Estudiante:', formData);
    };

    const handleDelete = () => {
        console.log('Eliminar Estudiante:', formData);
    };

    const handleConsult = () => {
        console.log('Consultar Estudiante:', formData);
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
                <CardTitle title="Estudiante" />
                <FormFields formData={formData} setFormData={setFormData} />
                <IonItem>
                    <IonLabel position="floating">Matrícula</IonLabel>
                    <IonInput name="matricula" value={formData.matricula} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Carrera</IonLabel>
                    <IonInput name="carrera" value={formData.carrera} onIonChange={handleChange} />
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

export default Estudiante;