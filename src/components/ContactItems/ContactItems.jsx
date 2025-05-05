import React from 'react'
import { MdPlace } from "react-icons/md"
import ParaText from "../ParaText/ParaText"
import "./ContactItems.css"

function ContactItems({
    icon = <MdPlace />,
    text = "this is an info"
}) {
  return (
    <div className="item_styles">
      <div className="icon">{icon}</div>
      <div className="info">
        <ParaText>{text}</ParaText>
      </div>
    </div>
  )
}

export default ContactItems
