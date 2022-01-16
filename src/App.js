import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
/* import CantidadPokemon from './components/CantidadPokemon';
import ComprarPokemon from './components/CompraPokemon'; */
import store from './redux/reducers/store';
import { Provider } from 'react-redux';
import CantidadPokemonHook from './components/CantidadPokemon.hook';
import CompraPokemonHook from './components/CompraPokemon.hook';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';

function App() {

  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: '370px' }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={require('./img/pokemon.png')} alt="valorant" className="card-img" />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    {/*<CantidadPokemon /> */}
                    <CantidadPokemonHook />
                  </div>
                  {/*<ComprarPokemon /> */}
                  <CompraPokemonHook />
                </div>
              </div>
            </div>
            <div className='col-12 mt-4 border-top pt-3'>
              <BuscadorPokemon />
            </div>
            <div className='col-12'>
              <ResultadoPokemon />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
