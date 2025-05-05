import React from 'react'
import './SectionTitle.css'; 

function SectionTitle({
    heading = "This is title",
    subheading = "This is subtitle",
}) {
  return (
    <div className="section_title_style">
      <h2 className="section-title">{heading}</h2>
      <p className="section-title-para">{subheading}</p>
    </div>
  )
}

export default SectionTitle
