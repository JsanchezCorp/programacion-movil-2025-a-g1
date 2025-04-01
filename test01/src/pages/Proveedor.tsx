import React, { useState } from 'react';
import { IonPage, IonContent, IonItem, IonLabel, IonInput } from '@ionic/react';
import CardTitle from '../components/CardTitle';
import FormFields from '../components/FormFields';
import ActionButtons from '../components/ActionButtons';

interface ProveedorFormData {
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    empresa: string;
    rubro: string;
}

const Proveedor: React.FC = () => {
    const [formData, setFormData] = useState<ProveedorFormData>({
        nombre: '',
        apellido: '',
        edad: 0,
        correo: '',
        empresa: '',
        rubro: ''
    });

    const handleAdd = () => {
        console.log('Agregar Proveedor:', formData);
    };

    const handleModify = () => {
        console.log('Modificar Proveedor:', formData);
    };

    const handleDelete = () => {
        console.log('Eliminar Proveedor:', formData);
    };

    const handleConsult = () => {
        console.log('Consultar Proveedor:', formData);
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
                <CardTitle title="Proveedor" />
                <FormFields formData={formData} setFormData={setFormData} />
                <IonItem>
                    <IonLabel position="floating">Empresa</IonLabel>
                    <IonInput name="empresa" value={formData.empresa} onIonChange={handleChange} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Rubro</IonLabel>
                    <IonInput name="rubro" value={formData.rubro} onIonChange={handleChange} />
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

export default Proveedor;