import React, { useState } from 'react';
import { IonPage, IonContent, IonItem, IonLabel, IonInput } from '@ionic/react';
import CardTitle from '../components/CardTitle';
import FormFields from '../components/FormFields';
import ActionButtons from '../components/ActionButtons';

interface ClienteFormData {
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    direccion: string;
    telefono: string;
}

const Cliente: React.FC = () => {
    const [formData, setFormData] = useState<ClienteFormData>({
        nombre: '',
        apellido: '',
        edad: 0,
        correo: '',
        direccion: '',
        telefono: ''
    });

    const handleAdd = () => {
        console.log('Agregar Cliente:', formData);
    };

    const handleModify = () => {
        console.log('Modificar Cliente:', formData);
    };

    const handleDelete = () => {
        console.log('Eliminar Cliente:', formData);
    };

    const handleConsult = () => {
        console.log('Consultar Cliente:', formData);
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
                <CardTitle title="Cliente" />
                <FormFields formData={formData} setFormData={setFormData} />
                <IonItem>
                    <IonLabel position="floating">Dirección</IonLabel>
                    <IonInput name="direccion" value={formData.direccion} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Teléfono</IonLabel>
                    <IonInput name="telefono" value={formData.telefono} onIonChange={handleChange} />
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

export default Cliente;