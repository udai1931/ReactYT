import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login';
import Feed from './Components/Feed';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {AuthProvider} from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Ioa from './Components/Ioa'

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <PrivateRoute path="/profile/:id" component={Profile}/>
        <PrivateRoute path="/" component={Feed}/>
      </Switch>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
