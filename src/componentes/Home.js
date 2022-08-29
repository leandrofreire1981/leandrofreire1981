import Agregar from "./Agregar";
import Post from "./Post";
import { Users } from "./Users";

export default function Home() {

    return (
        <div>
            <h2>Pagina Principal</h2>
            <Agregar />
            <Users />
            <Post />

            
        </div>
    )
}