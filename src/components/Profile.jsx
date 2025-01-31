const Profile = (props) => {
  return (
    <div className="profile">
      <h2 className="pokeNum">#{props.pokedex}</h2>
      <img className="character" src={props.CharacterImage} alt="" />
      <h2 className="pokeName">{props.name}</h2>
    </div>
  )
}

export default Profile
