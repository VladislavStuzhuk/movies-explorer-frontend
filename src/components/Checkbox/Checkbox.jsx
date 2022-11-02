import React from 'react';

import './Checkbox.css'
function Checkbox(props) {
  const {onCheckChange,isChecked} = props
  const onChangeHandler = () => {
    onCheckChange();
  }
 // document.getElementById('checkbox').checked = false;
  return (
    <div >
      <input id="checkbox" checked={!isChecked} onChange={onChangeHandler} type="checkbox" className="checkbox" hidden/>
      <label htmlFor="checkbox" className="checkbox__switch" />
    </div>
 )
}
export default Checkbox;
