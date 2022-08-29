import { Link } from 'react-router-dom'

export const User = (props) => {
  return (
    <div>
        <h3>Nombre:</h3>
        <Link to={`/userinfo/${props.id}`}>
          {props.name}
        </Link>
        <h3>Usuario: </h3>
        {props.username}
    </div>
  )
}
