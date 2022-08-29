import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { userInfo } from "../actions/Index"
import PostUserInfo from "./PostUserInfo"

export default function UserInfo(props) {
    const id = useParams().id

    
    console.log()
   //const dispatch = useDispatch()

   //dispatch(userInfo(id))
   
   
    



    return (
        <div>
           
            <PostUserInfo/> 
        </div>
    )
}
