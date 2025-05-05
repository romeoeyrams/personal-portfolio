// import { React, useState } from "react";
// import "./NavBar.css";
// import { NavLink } from "react-router-dom";
// import { MdMenu, MdClose } from "react-icons/md";

// function NavBar() {
//   const [showNav, setShowNav] = useState(false);

//   return (
//     <div className="navbar">
//       <div
//         className="mobile-menu-icon"
//         onClick={() => setShowNav(!showNav)}
//         role="button"
//         onKeyDown={() => setShowNav(!showNav)}
//         tabIndex={0}
//       >
//         <MdMenu />
//       </div>
//       <ul className={!showNav ? "navItems hide-tem" : "navItems"}>
//         <div
//           className="closeNavIcon"
//           onClick={() => setShowNav(!showNav)}
//           role="button"
//           onKeyDown={() => setShowNav(!showNav)}
//           tabIndex={0}
//         >
//           <MdClose />
//         </div>
//         <li>
//           <NavLink
//             to="/"
//             onClick={() => setShowNav(!showNav)}
//             role="button"
//             onKeyDown={() => setShowNav(!showNav)}
//             tabIndex={0}
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/about"
//             onClick={() => setShowNav(!showNav)}
//             role="button"
//             onKeyDown={() => setShowNav(!showNav)}
//             tabIndex={0}
//           >
//             About Me
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/services"
//             onClick={() => setShowNav(!showNav)}
//             role="button"
//             onKeyDown={() => setShowNav(!showNav)}
//             tabIndex={0}
//           >
//             Services
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/projects"
//             onClick={() => setShowNav(!showNav)}
//             role="button"
//             onKeyDown={() => setShowNav(!showNav)}
//             tabIndex={0}
//           >
//             Projects
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             onClick={() => setShowNav(!showNav)}
//             role="button"
//             onKeyDown={() => setShowNav(!showNav)}
//             tabIndex={0}
//           >
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default NavBar;
