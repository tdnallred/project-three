const BaseStats = (props) => {
  return (
    <div id={props.id}>
      <ul className="baseStatDet">
        <li>HP: {props.hp}</li>
        <li>ATK: {props.attack}</li>
        <li>DEF: {props.defense}</li>
        <li>SP. ATK: {props.specialATK}</li>
        <li>SP. DEF: {props.specialDEF}</li>
        <li>SPEED: {props.speed}</li>
      </ul>
    </div>
  )
}

export default BaseStats
