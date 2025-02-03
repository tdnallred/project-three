const Description = (props) => {
  return (
    <div>
      <h2 className="detName lato-black">
        #{props.pokedex} {props.name}
      </h2>
      <p className="lato-bold description">{props.description}</p>
    </div>
  )
}

export default Description
