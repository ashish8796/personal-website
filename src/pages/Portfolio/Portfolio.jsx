import  { useState, useEffect } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";


const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('data/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch(error => console.error('Error loading project data:', error));
  }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <ul className="filter-list">
        {
        ['All', 'Web Design', "API", 'Web Development'].map(category => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleFilterClick(category)}
              data-filter-btn
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <section className="projects">
        <ul className="project-list">
          {filteredProjects?.map(project => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <a href={project.github_repo_url} target='_blank'>
                    <FaGithub/>
                    </a>
                    <a href={project.url} target='_blank' >
                    <FaRegEye />
                    </a>
                  </div>

                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
