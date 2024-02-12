
import './App.css';
import Card from './component/Card';
import Categorie from './component/Categorie';
import Deals from './component/Deals';
import Header from './component/Header';
import Mobile from './component/Mobile';
import Popular from './component/Popular';
import Subscribe from './component/Subscribe';
import Work from './component/Work';

function App() {
  return (
    <div>
       <Header/>
       <Card/>
       <Deals/>
       <Categorie/>
       <Popular/>
       <Subscribe/>
       <Work/>
       <Mobile/>
    </div>
  );
}

export default App;
