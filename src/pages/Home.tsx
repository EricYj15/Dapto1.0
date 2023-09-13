import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect} from 'react';


function Model(props:any) {
  const meshRef:any = useRef();
  const gltf = useLoader(GLTFLoader, '../../public/dapto.glb');
  useFrame((state,delta) => (meshRef.current.rotation.y += delta));
  return(
    <primitive ref={meshRef}
    object={gltf.scene}
    position={[0, -3, 4]}
    children-0-castShadow
    />
  )

}




const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
<Canvas>
  <Model>

  </Model>

  <ambientLight/>
  </Canvas>      </IonContent>
    </IonPage>
  );
};



export default Home;
