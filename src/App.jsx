import './App.css'
import pokemon from './data/pokemon.json'
import Selection from './components/Selection'
import MainPane from './components/MainPane'

const pokemonArray = pokemon.results

const App = () => {
  return (
    <div className="App">
      <div className="top">
        <img className="pokemonHeader" src="src/Assets/pokemon.png" alt="" />
      </div>
      <div className="main">
        <MainPane pokemon={pokemonArray} />
      </div>

      {/* <Selection className="selection" pokemon={pokemonArray} /> */}
    </div>
  )
}

export default App
