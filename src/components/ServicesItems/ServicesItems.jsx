import React from "react";
import { MdDesktopMac } from "react-icons/md";
import ParaText from "../ParaText/ParaText";
import "./ServicesItems.css";

function ServicesItems({
    icon = <MdDesktopMac />,
    title = "Web Design",
    desc = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta tenetur perspiciatis suscipit eius exercitationem, non ratione deserunt odio magnam molestiae quaerat quo harum explicabo, omnis ab corrupti porro, ad veritatis?",
}) {
    return (
        <div className="serviceitem_styles">
            <div className="servicesitem_icon">{icon}</div>
            <div className="servicesItem_title">{title}</div>
            <ParaText>{desc}</ParaText>
        </div>
    );
}

export default ServicesItems;
