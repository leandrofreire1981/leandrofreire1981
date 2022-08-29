import { useSelector } from "react-redux"

export default function Post() {

const state = useSelector(state => state.post)

    return (
        <div>
            <h2>Usuarios Nuevos</h2>
            <div>
                {
                    state?.map((res,i) => (
                        <div key={i}>
                            <h3>Nombre: {res.name}</h3>
                            <p>Usuario: {res.username}</p>
                        </div>
                    ))
                }
            </div>           
        </div>
    )
}