import React from 'react';


class LogIn extends React.Component {
    render() {
      return <div style={{marginTop: '100px'}}> 
 <form >
  <label style={{display: 'flex', justifyContent: 'center'}}>
    UserName:
    <input type="text" name="username" />
  </label>
  <label>
    password:
    <input type="password" name="password" />
  </label>
</form>
<div style={{flexDirection: 'column', marginTop: '30px', paddingLeft: '600px', paddingRight: '600px', display: 'flex', justifyContent: 'center'}}> 
<input style = {{marginBottom: '10px'}} type="submit" value="Submit" />
<button> New User Click Here </button> 
</div>
</div>  
    }
  }

  export default LogIn; 

