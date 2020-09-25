import React, { useState } from 'react';

const Recipe = () => {

  return (
<div style={{border: '2px solid black', margin: '0 500px 0 500px', display: 'flex', justifyContent: 'center'}}> Recipe Form! </div>
 <form>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    Recipe name*:
    <input type="text" name="name" required/>
  </label>
  {/* having issues with this
  <label style={{display: 'flex', justifyContent: 'center'}}>
    Image:
    <input type="image" name="image" />
  </label> */}
  <label style={{display: 'flex', justifyContent: 'center'}}>
    ingredients:
    <input type="text" name="ingredients" />
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    url:
    <input type="url" name="url" />
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    directions:
    <input type="text" name="directions" />
  </label>
  <label style={{display: 'flex', justifyContent: 'center'}}>
    comments:
    <input type="text" name="comments" />
  </label>
</form>
<input style = {{marginBottom: '10px'}} type="submit" value="Submit" />
</div> 
  );
}

export default Recipe;