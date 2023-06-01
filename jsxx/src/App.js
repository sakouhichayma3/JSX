//importation de nos composants
import Adress from "./composant/Profile/Adress";
import Fullname from "./composant/Profile/Fullname";
import ProfilePhoto from "./composant/Profile/ProfilePhoto";
// importation de notre styleSheet boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>

    {/*appelation de nos composants */}
   <ProfilePhoto/> 
   <br/>
   <Fullname/>
   <Adress/>
  </>
  );
}

export default App;
