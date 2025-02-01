const Description = (props) => {
  return (
    <div>
      <h2 className="detName">
        #{props.pokedex} {props.name}
      </h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Description
