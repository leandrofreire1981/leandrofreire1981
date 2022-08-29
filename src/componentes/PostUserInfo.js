import { useSelector } from "react-redux"


export default function PostUserInfo(props) {

    
    const data = useSelector(state => state.detail)
  
   

    return (
        <div>
            
        
                       <h2>Informacion de usuario</h2>
                        <p>nombre: {data?.name}</p>
                        <p>usuario: {data?.username}</p>
                        <p>calle: {data.address?.street}</p>
                        <p>ciudad: {data.address?.city}</p>
        </div>
    )
}

