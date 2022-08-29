
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { posts } from '../actions/Index'


export default function Agregar () {

    const [input, setInput] = useState({
        name: '',
        username: ''
    })

    const dispatch = useDispatch()

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(posts(input))
        setInput({name: '', username: ''})
        e.target[0].value=''
        e.target[1].value=''
    }
    
    function handleOnChange(e) {
        setInput({...input, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type='text' name='name' placeholder='Ingrese Nombre...' onChange={handleOnChange}/>
                <input type='text' name='username' placeholder='Ingrese Usuario...' onChange={handleOnChange} />
                <input type='submit' value='Agregar'/>
            </form>            
        </div>
    )
}