const Profile = (props) => {
  return (
    <div id={profile}>
      <img src={props.CharacterImage} alt="" />
      <h2>{props.name}</h2>
    </div>
  )
}

export default Profile
