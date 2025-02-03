const BaseStats = (props) => {
  return (
    <div className="baseStats" id={props.id}>
      <ul className="baseStatDet lato-black">
        <li className="Badge">
          HP <span className="stat">{props.hp}</span>
        </li>
        <li className="Badge">
          ATK:<span className="stat">{props.attack}</span>
        </li>
        <li className="Badge">
          DEF <span className="stat">{props.defense}</span>
        </li>
        <li className="Badge">
          SP. ATK <span className="stat">{props.specialAtk}</span>
        </li>
        <li className="Badge">
          SP. DEF <span className="stat">{props.specialDef}</span>
        </li>
        <li className="Badge">
          SPEED <span className="stat">{props.speed}</span>
        </li>
      </ul>
    </div>
  )
}

export default BaseStats
