
export default function CoreConcept(props){
    return (
      <li>
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p></p>
      </li>
    )
  }