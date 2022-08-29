export const GET_USERS = 'GET_USERS'
export const USER_INFO = 'USER_INFO'
export const POST = 'POST'

export function getUsers() {

   return function(dispatch) {
                fetch(`https://jsonplaceholder.typicode.com/users`)
                .then(res => res.json())
                .then(res => {
                   dispatch({
                     type: GET_USERS,
                     payload: res
                   })
                })
                .catch(error => console.log(error))
    
               }
         }

   export function userInfo (id) {
      
      return function(dispatch) {
         fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(res => res.json())
         .then(res => {
            dispatch ({type: USER_INFO, payload: res})
         })
         .catch(error => console.log(error))
      }


      
   }

   export function posts(post) {
      return {
         type: POST,
         payload: post
      }
   }