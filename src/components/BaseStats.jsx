const BaseStats = (props) => {
  return (
    <div id={props.id}>
      <h3>Vitals</h3>
      <ul>
        <li>Pokedex #: {props.pokedex}</li>
        <li>Type: {props.type}</li>
        <li>Classification: {props.classification}</li>
        <li>Ability: {props.ability}</li>
      </ul>
    </div>
  )
}

export default BaseStats
