import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';


function App() {
  return (
  <>
    <Navbar />
    <ItemListConteiner NombreProducto= "Filtro" stock={10}/>
    <ItemListConteiner NombreProducto= "Aireador" stock={15}/>
    <ItemListConteiner NombreProducto= "Pecera" stock={20}/>
  </>

  );
};

export default App
