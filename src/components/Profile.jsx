// Profile.jsx
const Profile = (props) => {
  return (
    <div className="profile">
      <h2 className="pokeNum lato-black-italic">{props.pokedex}</h2>
      <img className="character" src={props.CharacterImage} alt="" />
      <h2 className="pokeName lato-black">{props.name}</h2>
    </div>
  )
}

export default Profile
