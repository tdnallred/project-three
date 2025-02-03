import './App.css'
import pokemon from './data/pokemon.json'
import Selection from './components/Selection'
import MainPane from './components/MainPane'
import React, { useState } from 'react'

const pokemonArray = pokemon.results

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon)
  }

  return (
    <div className="App">
      <div className="top">
        <img className="pokemonHeader" src="src/Assets/pokemon.png" alt="" />
      </div>
      <div className="body">
        <div className="main">
          <MainPane
            pokemon={pokemonArray}
            onSelect={handlePokemonSelect}
            // selectedPokemon={selectedPokemon} // Pass selectedPokemon to MainPane
          />
        </div>

        {selectedPokemon && (
          <div className="pokemon-details">
            <Selection selectedPokemon={selectedPokemon} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
