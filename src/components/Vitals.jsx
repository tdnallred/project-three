const Vitals = (props) => {
  return (
    <div>
      <ul className="vitals">
        <li>Type: {props.type}</li>
        <li>Classification: {props.classification}</li>
        <li>Ability: {props.ability}</li>
      </ul>
    </div>
  )
}

export default Vitals
