const DetailPane = (selectedPokemon) => {
  return (
    <div>
      {/* {selectedPokemon.map((pokemon) => (
        <div key={pokemon.id}>
          <h1>{pokemon.name}</h1>
        </div>
      ))} */}
      <h1>{selectedPokemon.name}</h1>
    </div>
  )
}

export default DetailPane
