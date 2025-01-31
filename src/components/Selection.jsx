import Profile from './Profile'
import Vitals from './Vitals'
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
          <Vitals
            pokedex={profile.vitals.pokedex}
            type={profile.vitals.type}
            classification={profile.vitals.classification}
            ability={profile.vitals.ability}
            id={profile.id}
          />
          <BaseStats
            hp={profile.basedStats.hp}
            attack={profile.basedStats.attack}
            defense={profile.basedStats.defense}
            specialAtk={profile.basedStats.specialAtk}
            specialDef={profile.basedStats.specialDef}
            speed={profile.basedStats.speed}
          />
        </div>
      ))}
    </div>
  )
}

export default Selection
