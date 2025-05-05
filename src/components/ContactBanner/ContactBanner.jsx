import React from 'react'
import ParaText from '../ParaText/ParaText'
import './ContactBanner.css'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'

function ContactBanner() {
  return (
    <div className="contactbanner_style">
      <div className="contact_banner_container">
        <div className="contactbanner_wrapper">
        <ParaText>
        Have a project in mind?
        </ParaText>
        <div className="contactbanner_heading">
            <h3>Let me help you</h3>
            {/* <button className="btn btn-primary">Contact now</button> */}
            <Button to="/contact" buttonStyle="btn--outline" buttonSize="btn--large">Contact Now</Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
