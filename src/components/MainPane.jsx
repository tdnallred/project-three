import Profile from './Profile'

const MainPane = ({ pokemon, onSelect, selectedPokemon }) => {
  return (
    <div className="pokemonGrid">
      {pokemon.map((profile) => (
        <div key={profile.id} onClick={() => onSelect(profile)}>
          <Profile
            CharacterImage={profile.CharacterImage}
            name={profile.name}
            pokedex={profile.vitals.pokedex}
          />
        </div>
      ))}
    </div>
  )
}

export default MainPane
