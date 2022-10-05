import React from 'react';

import './SectionHeader.css'
function SectionHeader(props) {
  const { header } = props
  
  return (
      <h2 className='section-header'>{header}</h2>
 )
}
export default SectionHeader;