import React from 'react';


class LogIn extends React.Component {
    render() {
      return <div style={{marginTop: '100px'}}> 
 <form>
  <label>
    UserName:
    <input type="text" name="username" />
  </label>
</form>

<form>
  <label>
    password:
    <input type="password" name="password" />
  </label>
</form>
<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '30px', paddingLeft: '600px', paddingRight: '600px'}}> 
<input style = {{marginBottom: '10px'}} type="submit" value="Submit" />
<button> New User Click Here </button> 
</div> 
    </div>
    }
  }

  export default LogIn; 

