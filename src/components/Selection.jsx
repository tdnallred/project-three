const Selection = (props) => {
  const pokemonProfile = props.pokemon.map((pokemon) => (
    <div key={pokemon.id}>
      <img src={pokemon.CharacterImage} alt="" />
      <h2>Name: {pokemon.name}</h2>
      <div className="vitals">
        <h3>Vitals</h3>
        <ul>
          <li>Pokedex #: {pokemon.vitals.pokedex}</li>
          <li>Type: {pokemon.vitals.type}</li>
          <li>Classification: {pokemon.vitals.classification}</li>
          <li>Ability: {pokemon.vitals.ability}</li>
        </ul>
      </div>
      <div>
        <h3>Based Stats</h3>
        <ul>
          <li>HP: {pokemon.basedStats.hp}</li>
          <li>Attack: {pokemon.basedStats.attack}</li>
          <li>Defense: {pokemon.basedStats.defense}</li>
          <li>specialAtk: {pokemon.basedStats.specialAtk}</li>
          <li>specialDef: {pokemon.basedStats.specialDef}</li>
          <li>Speed: {pokemon.basedStats.speed}</li>
        </ul>
      </div>
      <div>
        <h3>Description</h3>
        <p>{pokemon.description}</p>
      </div>
    </div>
  ))

  return <div>{pokemonProfile}</div>
}

export default Selection
