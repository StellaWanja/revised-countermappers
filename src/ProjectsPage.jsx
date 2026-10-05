import { Link } from "react-router";
import { projects } from "./constants";
import { FaArrowRight } from "react-icons/fa";
import "./styles/Projects.css";

function ProjectsPage() {
  return (
    <section className="page projects-page section-dark">
      <div className="projects-header">
        <h2>
          Research through <em>place, mapping,</em> and participation.
        </h2>
        <p>
          Research cases connecting context, question, method, mapping and
          reflection.
        </p>
      </div>
      <div className="projects-grid-page">
        {projects.map((project) => (
          <Link
            className="project-index-card"
            key={project.number}
            to={`/projects/${project.slug}`}
          >
            <div className="project-index-meta">
              <span>/{project.number}</span>
              <span>{project.year}</span>
            </div>
            <div className="project-index-art">
              <img src={project.blogImages[0]} alt={project.title} />
            </div>
            <div className="project-index-content">
              <span>{project.subtitle}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link to={`/projects/${project.slug}`} className="project-link">
                <span>Read case study </span>
                <FaArrowRight />
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
