import { GET_USERS, POST, USER_INFO } from "../actions/Index";

const initialState = {
    users: [],
    detail: [],
    post: []
}
export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        
        case USER_INFO: 
            return {...state, detail: action.payload}
        
        case POST:
            return {...state, post: [...state.post, action.payload]}
            
        default:
            return state
            
    }
}