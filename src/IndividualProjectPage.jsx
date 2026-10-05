import { Link, Navigate, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import ProjectGallery from "./ProjectGallery.jsx";
import { projects } from "./constants.js";
import "./styles/IndividualProject.css";

function IndividualProjectPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    // <SplitPage
    //   dark={true}
    //   visual={
    //     <ProjectGallery
    //       key={project.slug}
    //       images={project.blogImages}
    //       title={project.title}
    //     />
    //   }
    //   visualMeta={`${project.location.toUpperCase()} / ${project.method.toUpperCase()}`}
    // >
    //   <Link className="back-link" to="/projects">
    //     <FaArrowLeft /> Back to projects
    //   </Link>

    //   <div className="project-detail-head">
    //     <p className="project-subtitle">{project.subtitle}</p>
    //     <h2>{project.title}</h2>
    //     <p className="split-lede">{project.text}</p>
    //   </div>

    //   <div className="detail-meta">
    //     <div>
    //       <span>YEAR</span>
    //       <strong>{project.year}</strong>
    //     </div>
    //     <div>
    //       <span>LOCATION</span>
    //       <strong>{project.location}</strong>
    //     </div>
    //     <div>
    //       <span>METHOD</span>
    //       <strong>{project.method}</strong>
    //     </div>
    //   </div>

    //   <div className="detail-block">
    //     <p className="kicker">PROJECT CONTEXT</p>
    //     <p>{project.detail}</p>
    //   </div>

    //   <div className="detail-block">
    //     <p className="kicker">RESEARCH LENS</p>
    //     <div className="tag-row detail-tags">
    //       {project.tags.map((tag) => (
    //         <span key={tag}>{tag}</span>
    //       ))}
    //     </div>
    //   </div>

    //   <div className="detail-block">
    //     <p className="kicker">DOCUMENTATION</p>
    //     <p>
    //       Additional field photographs, maps, diagrams and research outputs can
    //       be added here as the project archive develops.
    //     </p>
    //   </div>
    // </SplitPage>
    <section className="project-page section-dark ">
      {/* IMAGE GALLERY */}
      <div className="project-page-gallery">
        <ProjectGallery
          key={project.slug}
          images={project.blogImages}
          title={project.title}
        />
      </div>

      {/* PROJECT CONTENT */}
      <div className="project-page-content">
        <Link className="back-link" to="/projects">
          <FaArrowLeft /> Back to projects
        </Link>

        <div className="project-detail-head">
          <p className="project-subtitle">{project.subtitle}</p>

          <h2>{project.title}</h2>

          <p className="split-lede">{project.text}</p>
        </div>

        <div className="detail-meta">
          <div>
            <span>YEAR</span>
            <strong>{project.year}</strong>
          </div>

          <div>
            <span>LOCATION</span>
            <strong>{project.location}</strong>
          </div>

          <div>
            <span>METHOD</span>
            <strong>{project.method}</strong>
          </div>
        </div>

        <div className="detail-block">
          <p className="kicker">PROJECT CONTEXT</p>
          <p>{project.detail}</p>
        </div>

        <div className="detail-block">
          <p className="kicker">RESEARCH LENS</p>

          <div className="tag-row detail-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="detail-block">
          <p className="kicker">DOCUMENTATION</p>

          <p>
            Additional field photographs, maps, diagrams and research outputs
            can be added here as the project archive develops.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndividualProjectPage;
