import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './componentes/Home';
import UserInfo from './componentes/UserInfo';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions/Index';


function App() {
  const dispatch = useDispatch()

  dispatch(getUsers())

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/userinfo/:id' component={UserInfo}/>
      </Switch>
        <Link to='/'>Pagina Principal</Link>
    </div>
  );
}

export default App;
