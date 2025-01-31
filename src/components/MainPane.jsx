import Profile from './Profile'

const MainPane = (props) => {
  return (
    <div className="pokemonGrid">
      {props.pokemon.map((profile) => (
        <div key={profile.id}>
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
