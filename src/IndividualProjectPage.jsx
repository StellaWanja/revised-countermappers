import { Link, Navigate, useParams } from "react-router";
import MapArtwork from "./MapArtwork.jsx";
import SplitPage from "./SplitPage.jsx";
import { projects } from "./constants.js";

function IndividualProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <SplitPage
      label={`Project / ${project.number}`}
      index="02"
      dark={true}
      visual={
        <div className="visual-stack">
          <MapArtwork variant={Number(project.number)} />
          <span className="visual-index">{project.year} / FIELD STUDY</span>
        </div>
      }
      visualMeta={`${project.location.toUpperCase()} / ${project.method.toUpperCase()}`}
    >
      <Link className="back-link" to="/projects">
        ← Back to projects
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
          Additional field photographs, maps, diagrams and research outputs can
          be added here as the project archive develops.
        </p>
      </div>
    </SplitPage>
  );
}

export default IndividualProjectPage;
