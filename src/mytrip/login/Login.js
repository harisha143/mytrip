import React from 'react'
import './Login.css'
import { Link} from 'react-router-dom';
export default function Login() {
    return (
        <div>
            <div id="container">
 
  
  <div className="form">
  <div className="container">
<section id="content">
<form className="login">
<h1 className="logHead">Login</h1>
<div>
<input type="text" placeholder="Username" required="" id="username" />
</div>
<div>
<input type="password" placeholder="Password" required="" id="password" />
</div>
<div>
<input type="submit" value="Login"  className="sub"/> <br/>
</div>
<Link to="/register"> New User Register here.</Link>
</form>

</section>
</div>
  </div>
</div>
        </div>
    )
}