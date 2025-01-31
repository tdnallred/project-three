import Profile from './Profile'
import BaseStats from './BaseStats'

const Selection = (props) => {
  return (
    <div>
      {props.pokemon.map((profile) => (
        <div key={profile.id}>
          <Profile
            CharacterImage={profile.CharacterImage}
            name={profile.name}
            id={profile.id}
          />
          <BaseStats
            pokedex={profile.vitals.pokedex}
            type={profile.vitals.type}
            classification={profile.vitals.classification}
            ability={profile.vitals.ability}
            id={profile.id}
          />
        </div>
      ))}

      {/* {props.pokemon.map((baseStats) => (
        <BaseStats
          key={baseStats.id}
          pokedex={baseStats.vitals.pokedex}
          type={baseStats.vitals.type}
          classification={baseStats.vitals.classification}
          ability={baseStats.vitals.ability}
          id={baseStats.id}
        />
      ))} */}
    </div>
  )
}

export default Selection
