import './App.css';
import Filtros from './Componentes/Filtros/Filtros';
import Header from './Componentes/Header/Header';
import Router from './Routes/Router';

const App = () => {
  return (
    <div>
      <Header/>  
      <Filtros/>   
      <Router/>
      </div>
  );
}

export default App;
