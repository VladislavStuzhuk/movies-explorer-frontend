import React from 'react';

import './Checkbox.css'
function Checkbox() {
  
  return (
    <div >
      <input id="checkbox" type="checkbox" className="checkbox" hidden/>
      <label htmlFor="checkbox" className="checkbox__switch" />
    </div>
 )
}
export default Checkbox;
