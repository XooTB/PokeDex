import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../containers/navBar/NavBar';
import PokemonContainer from '../pokemonContainer/PokemonContainer'
import Home from '../home/home';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:name' element={<PokemonContainer />} />
      </Routes>

    </div>
  );
}

export default App;
