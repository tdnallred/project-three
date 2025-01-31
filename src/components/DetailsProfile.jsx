const DetailsProfile = (props) => {
  return (
    <div className="detailsProfile">
      <img className="detCharacter" src={props.CharacterImage} alt="" />
      <h2 className="detPokeNum">#{props.pokedex}</h2>
      <h2 className="detName">{props.name}</h2>
    </div>
  )
}

export default DetailsProfile
