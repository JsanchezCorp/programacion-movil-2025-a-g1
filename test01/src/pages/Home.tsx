import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Prueba from '../components/Prueba/Prueba';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Prueba />
    </IonPage>
  );
};

export default Home;
