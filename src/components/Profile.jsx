const Profile = (props) => {
  return (
    <div id={props.id}>
      <img src={props.CharacterImage} alt="" />
      <h2>{props.name}</h2>
    </div>
  )
}

export default Profile
