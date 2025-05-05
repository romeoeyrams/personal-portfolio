// import React from "react";
// import { Link } from "react-router-dom";
// import "./Button.css";

// function Button({ btnLink = "test", btnText = "Test", outline = false }) {
//     return (
//         <div className="button-style" outline={outline}>
//             <Link className="button" to={btnLink}>
//                 {btnText}
//             </Link>
//         </div>
//     );
// }

// export default Button;


import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--small', 'btn--medium', 'btn--large']

export const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize 
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0]

     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

     return (
        <Link to={Link} className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={type}>
                {children}
            </button>
        </Link>
     )
};