import React from 'react';
//importation de notre composant Image
import Image from 'react-bootstrap/Image';
import L1 from './femm2.jpg'
//fonction ProfilePhoto
const ProfilePhoto = () => {
  return (
    //style inline de notre contenu
    <div style={{display:"flex",justifyContent:"center"}}>

        {/* insertion de notre image à l'aide du composantboostrap Image */}
      <Image src={L1} fluid />
      
      </div>
  );
}

export default ProfilePhoto;
