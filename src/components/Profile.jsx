const Profile = (props) => {
  return (
    <div>
      <img src={props.CharacterImage} alt="" />
      <h2>{props.name}</h2>
    </div>
  )
}

export default Profile
