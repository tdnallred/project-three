import Profile from './Profile'

const Selection = (props) => {
  return (
    <div>
      {props.pokemon.map((profile) => (
        <Profile
          key={profile.id}
          CharacterImage={profile.CharacterImage}
          name={profile.name}
          id={profile.id}
        />
      ))}
    </div>
  )
}

export default Selection
