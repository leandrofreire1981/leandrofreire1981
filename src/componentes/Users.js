import { User } from './User'
import { useSelector } from 'react-redux'

export const Users = () => {
   
  const state = useSelector(state => state.users)
    
  return (
    <div>
        <h2>Usuarios</h2>
        {
            state?.map(res => (
                <div key={res.id}>
                    <User name={res.name} username={res.username} id={res.id} />
                </div>
            ))
        }
    </div>
  )
}
