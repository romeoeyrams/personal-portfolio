import React, { useState } from 'react'
import SectionTitle from "../../components/SectionTitle/SectionTitle"
import "./ContactSection.css"
// import { Button } from '../../components/Button/Button'
import ContactItems from '../ContactItems/ContactItems'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import { motion } from 'framer-motion'

function ContactSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


  return (
    <div className="contact_section_style">
        <motion.div className="container"
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 1 }}
        transition={{ duration: 2 }}>
        <SectionTitle heading="Contact" subheading="" />
        </motion.div>
        
        <div className="contact_section_container">
            <div className="contact_section_wrapper">
                <div className="left">
                    <ContactItems 
                    icon = {<MdLocalPhone />}
                    text="+233209044800 / +233261971922"/>
                    <ContactItems 
                    icon = {<MdEmail />}
                    text="colbby@gmail.com"/>
                    <ContactItems 
                    text="Accra, Ghana"/>
                </div>
                <div className="right">
                    <form>
                        <div className="form_group">
                            <label htmlFor="name" className="label_name">
                            <input type="text" id="name" name="name" value={name}
                            onChange={(e) => setName(e.target.value)} placeholder='Your name' required/>
                            </label>
                        </div>

                        <div className="form_group">
                            <label htmlFor="email">
                            <input type="email" id="email" name="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} placeholder='Your email' required/>
                            </label>
                        </div>

                        <div className="form_group">
                            <label htmlFor="message">
                            <textarea type="text" id="message" name="message" value={message}
                            onChange={(e) => setMessage(e.target.value)} placeholder='Your message' required/>
                            </label>
                        </div>
                        {/* <button type="submit">Send</button> */}
                        {/* <Button type="submit" className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Send</Button> */}
                    </form>
                </div>
            </div>
        </div>
 </div>
  )
}

export default ContactSection
