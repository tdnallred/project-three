import './App.css'
import pokemon from './data/pokemon.json'
import Selection from './components/Selection'
import MainPane from './components/MainPane'
import React, { useState } from 'react'

const pokemonArray = pokemon.results

const App = () => {
  // State to track the selected Pokemon
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  // Handle click event to select a Pokémon
  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon)
  }

  return (
    <div className="App">
      <div className="top">
        <img className="pokemonHeader" src="src/Assets/pokemon.png" alt="" />
      </div>
      <div className="main">
        <MainPane pokemon={pokemonArray} onSelect={handlePokemonSelect} />
      </div>

      {/* <Selection className="selection" pokemon={pokemonArray} /> */}

      {selectedPokemon && (
        <div className="pokemon-details">
          <h2>Selected Pokémon: {selectedPokemon.name}</h2>
          {/* Show more details of the selected Pokémon */}
        </div>
      )}
    </div>
  )
}

export default App
