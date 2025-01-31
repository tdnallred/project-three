import './App.css'
import pokemon from './data/pokemon.json'
import Selection from './components/Selection'
import MainPane from './components/MainPane'

const pokemonArray = pokemon.results

const App = () => {
  return (
    <div className="App">
      <img className="pokemonHeader" src="src/Assets/pokemon.png" alt="" />
      {/* <Selection className="selection" pokemon={pokemonArray} /> */}

      <MainPane pokemon={pokemonArray} />
    </div>
  )
}

export default App
