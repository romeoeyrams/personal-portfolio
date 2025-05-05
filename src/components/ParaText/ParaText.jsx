import React from 'react'
import './ParaText.css';

function ParaText({children}) {
  return (
    <div className="para">
      <p>{children}</p>
    </div>
  )
}

export default ParaText
