const Vitals = (props) => {
  return (
    <div>
      <ul className="vitals">
        <div className="top-vital">
          <li>
            <span className="label lato-bold">Type: </span>
            <span className="value lato-black">{props.type}</span>
          </li>
          <li>
            <span className="label lato-bold">Classification: </span>
            <span className="value lato-black">{props.classification}</span>
          </li>
        </div>
        <li>
          <span className="label lato-bold">Ability: </span>
          <span className="value lato-black">{props.ability}</span>
        </li>
      </ul>
    </div>
  )
}

export default Vitals
