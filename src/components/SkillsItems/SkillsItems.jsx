import React from "react";
import ParaText from "../ParaText/ParaText";
import "./SkillsItems.css";
import { assets } from "../../assets/assets";

function SkillsItems({
  icon = <img src={assets.html} alt="icon" />,
  iconname = "icon name",
}) {
  return (
    <>
    <div className="container">
      <div className="skillsitem">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      </div>
    </div>
    {/* <div className="skills_item">
      <div className="icon">{icon}</div>
      <div className="icon_name">
        <ParaText>{iconname}</ParaText>
      </div>
    </div> */}
    </>
  );
}

export default SkillsItems;
