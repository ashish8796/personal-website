import { useState, useEffect } from "react";
import ProjectModal from "../../components/ProjectModal";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [project, setProject] = useState({});

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error loading project data:", error));
  }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <ul className="filter-list">
        {["All", "Web Development", "API"].map((category) => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? "active" : ""}
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
          {filteredProjects?.map((project) => (
            <li
              className="project-item active cursor-pointer"
              data-filter-item
              data-category={project.category}
              key={project.id}
              onClick={() => {
                setProject(project);
                setIsOpen(true);
              }}
            >
              <figure className="project-img">
                <img src={project.image} alt={project.title} loading="lazy" />
              </figure>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </li>
          ))}
        </ul>
      </section>

      {isOpen && <ProjectModal project={project} setIsModalOpen={setIsOpen} />}
    </section>
  );
};

export default Portfolio;
