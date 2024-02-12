
import './App.css';
import Card from './component/Card';
import Categorie from './component/Categorie';
import Deals from './component/Deals';
import Header from './component/Header';
import Popular from './component/Popular';

function App() {
  return (
    <div>
       <Header/>
       <Card/>
       <Deals/>
       <Categorie/>
       <Popular/>
    </div>
  );
}

export default App;
