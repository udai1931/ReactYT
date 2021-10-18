import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const Home = () => {
 return (<div>Home</div>)
}
const Dashboard = () => {
 return (<div>Dashboard</div>)
}
const Profile = () => {
 return (<div>Profile</div>)
}
export default App = () => {
 return (<BrowserRouter>
 <Route path='/' component={Home}></Route>
 <Route path='/dashboard/profile' component={Profile}></Route> 
 <Route path='/dashboard' component={Dashboard}></Route>
 </BrowserRouter>
 )
}