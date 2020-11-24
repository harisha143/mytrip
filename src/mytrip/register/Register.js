import React from 'react';
import './Register.css';
import { Link} from 'react-router-dom';
export default function Register() {
    return (
        <div>
            


            <h2 ALIGN="CENTER" className="registraionHead">Registration form</h2>

<form action="Welcome.html" >
<table align="center">
<tbody id="a1">

<tr>
<td><label for="id">Name: </label></td>
<td><input id="id" maxlength="100" name="name" type="text" /></td>
</tr>

<tr>
<td><label for="name">Email: </label></td>
<td><input id="id" maxlength="100" name="name" type="text" /></td>
</tr>

<tr>
<td><label for="course">Ph No.: </label></td>
<td><input id="id" maxlength="100" name="course" type="text" /></td>
</tr>

<tr>
<td><label for="branch">Password: </label></td>
<td><input id="id" maxlength="100" name="branch" type="text" /></td>

</tr>

<tr>
<td><label for="branch">Gender: </label></td>

<input type="radio" name="r1" checked  class="in"/> Male
<input type="radio" name="r1" checked class="in"/> Female
<input type="radio" name="r1" checked class="in"/> Others
</tr>

    
    


<tr>
<td><label for="aboutus">Address:</label></td>
<td valign="middle" align="center"><textarea></textarea></td>
</tr>

<tr>
<td><label for="aboutus">Favourite:</label></td>
<select  id="id" name = "dropdown">
            <option value = "Computer Select" selected>Select</option>
            <option value = "Dubai">Dubai</option>
            <option value = "Paris">Paris</option>
            <option value = "Germay">Germany</option>
            <option value = "Delhi">Delhi</option>
            <option value = "Mumbai">Mumbai</option>
         </select>
</tr>

<tr>
<td ><br/>
    <Link to="/login">
      <input type="submit" value="Register"  className="regsub"/>

</Link>
</td>
</tr>

</tbody>
</table>
</form>

            
        </div>
    )
}