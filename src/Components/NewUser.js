import React from 'react';

class NewUser extends React.Component {
    render() {
      return <div style={{marginTop: '100px'}}> 
 <form>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    name*:
    <input type="text" name="name" required/>
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    username*:
    <input type="text" name="username" required/>
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    email*:
    <input type="email" name="email" required/>
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    password*:
    <input type="password" name="password" required/>
  </label>
</form>
<input style = {{marginBottom: '10px'}} type="submit" value="Submit" />
</div> 
    }
  }

  export default NewUser; 

