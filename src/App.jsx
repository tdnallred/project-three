import './App.css'
import pokemon from './data/pokemon.json'
import Selection from './components/Selection'

const pokemonArray = pokemon.results

const App = () => {
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <h2>Select a pokemon</h2>
      <Selection pokemon={pokemonArray} />
    </div>
  )
}

export default App
