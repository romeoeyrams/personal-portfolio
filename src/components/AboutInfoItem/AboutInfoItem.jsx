import React from 'react'
import ParaText from '../ParaText/ParaText'
import './AboutInfoItem.css'

function AboutInfoItem({
    title="This is title",
    items=['HTML', 'CSS']
}) {
  return (
    <div className="aboutitem_styles">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item,index) => (
            <div className="item" key={index}>
                <ParaText>{item}</ParaText>
            </div>
        ))}
      </div>
    </div>
  )
}

export default AboutInfoItem
