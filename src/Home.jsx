import { Link, useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import MapArtwork from "./MapArtwork";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="page home-page section-dark">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="pulse" /> CRITICAL MAPPING + SPATIAL PRACTICE
        </div>
        <h1>
          Reimagining how we <em>read, map,</em> and shape urban territories.
        </h1>
        <p className="hero-lede">
          CounterMappers brings radical geography, critical cartography and
          social innovation into conversation with situated knowledge, memory
          and collective action.
        </p>
        <div className="hero-actions">
          <Link
            className="button button-light"
            to={() => navigate("research")}
          >
            Explore the research <FaArrowRight />
          </Link>
          <Link className="text-link light" to={() => navigate("projects")}>
            View selected projects <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="hero-art-wrap">
        <MapArtwork variant={1} />
        <div className="hero-caption">
          <span>01 /</span> A spatial object composed of layered histories,
          territories and community pathways.
        </div>
      </div>
      <div className="hero-meta">
        <div>
          <span>BASED IN</span>
          <strong>Nairobi / Kenya</strong>
        </div>
        <div>
          <span>RESEARCH</span>
          <strong>KU Leuven / Belgium</strong>
        </div>
        <div>
          <span>FIELD</span>
          <strong>Urbanism · Cartography · Planning</strong>
        </div>
      </div>
    </section>
  );
}

export default Home;
