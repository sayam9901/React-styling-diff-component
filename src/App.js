
import './App.css';
import Card from './component/Card';
import Categorie from './component/Categorie';
import Deals from './component/Deals';
import Header from './component/Header';
import Popular from './component/Popular';
import Subscribe from './component/Subscribe';

function App() {
  return (
    <div>
       <Header/>
       <Card/>
       <Deals/>
       <Categorie/>
       <Popular/>
       <Subscribe/>
    </div>
  );
}

export default App;
