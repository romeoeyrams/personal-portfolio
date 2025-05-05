import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { MdSearch } from 'react-icons/md';
import ProjectItems from "../../components/ProjectItems/ProjectItems"


function Projects() {
  return (
    <div className="project_styles">
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my works" />
        <div className="project_searchbar">
          <form>
            <input type="text" />
            <MdSearch />
            Projects
          </form>
        </div>
        <div className="project_allItems">
          <ProjectItems />
        </div>
      </div>
    </div>
  )
}

export default Projects
