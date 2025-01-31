import Profile from './Profile'
import Vitals from './Vitals'
import BaseStats from './BaseStats'
import Description from './Description'
import DetailsProfile from './DetailsProfile'

const Selection = ({ selectedPokemon }) => {
  return (
    <div>
      {/* Render selected Pokémon details */}
      <DetailsProfile
        CharacterImage={selectedPokemon.CharacterImage}
        name={selectedPokemon.name}
        pokedex={selectedPokemon.vitals.pokedex}
      />
      <Description description={selectedPokemon.description} />
      <Vitals
        type={selectedPokemon.vitals.type}
        classification={selectedPokemon.vitals.classification}
        ability={selectedPokemon.vitals.ability}
      />
      <BaseStats
        hp={selectedPokemon.basedStats.hp}
        attack={selectedPokemon.basedStats.attack}
        defense={selectedPokemon.basedStats.defense}
        specialAtk={selectedPokemon.basedStats.specialAtk}
        specialDef={selectedPokemon.basedStats.specialDef}
        speed={selectedPokemon.basedStats.speed}
      />
    </div>
  )
}

export default Selection

// const Selection = ({selectedPokemon}) => {
//   return (
//     <div>
//       {props.pokemon.map((profile) => (
//         <div key={profile.id}>
//           <Profile
//             CharacterImage={profile.CharacterImage}
//             name={profile.name}
//             pokedex={profile.vitals.pokedex}
//           />
//           <Description description={profile.description} />
//           <Vitals
//             type={profile.vitals.type}
//             classification={profile.vitals.classification}
//             ability={profile.vitals.ability}
//           />
//           <BaseStats
//             hp={profile.basedStats.hp}
//             attack={profile.basedStats.attack}
//             defense={profile.basedStats.defense}
//             specialAtk={profile.basedStats.specialAtk}
//             specialDef={profile.basedStats.specialDef}
//             speed={profile.basedStats.speed}
//           />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Selection
