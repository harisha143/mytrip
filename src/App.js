import './App.css';
import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Home from './mytrip/home/Home';
import Contact from './mytrip/contact/Contact';
import Login from './mytrip/login/Login';
import Tp from './mytrip/trippackage/Tp';
import Register from './mytrip/register/Register';
function App() {
  return (
    <div className="App">
      <div className="container">        
      <div class="alert alert-dark bg-warning" role="alert">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgxMAUcbk8rMQcZ03uxAMtP5UbRzWKU92BA&usqp=CAU" alt="logo" className="mainLogo"></img>
        <label className="appHead">Mytrip.com</label>
        </div>
      </div>
      <Router>
        <div className="container">
      <nav className="navbar-expand-lg bg-dark">
    <div className="navbar-nav">
      <Link to="/" className="nav-item nav-link" >Home</Link>
      <Link to="/contact" className="nav-item nav-link">Contact</Link>
      <Link to="/trippackage" className="nav-item nav-link">Trip-Package</Link> 
      <div className="log"> 
      <Link to="/login" className="nav-item nav-link">Login</Link> 
      </div>
      <div className="reg"> 
      <Link to="/register" className="nav-item nav-link">Register</Link> 
      </div>
    </div>
  </nav>
  </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/trippackage" component={Tp}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
</Router>
    </div>
  );
}

export default App;