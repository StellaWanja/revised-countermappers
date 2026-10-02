import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import LandingPageImage from "./assets/landing-page.png";
import "./styles/Home.css";

function Home() {

  return (
    <section className="page home-page section-dark">
      <div className="hero-copy">
        <h1>
          Reimagining how we <em>read, map,</em> and shape urban territories.
        </h1>
        <p>
          CounterMappers brings radical geography, critical cartography and
          social innovation into conversation with situated knowledge, memory
          and collective action.
        </p>
        <div className="hero-actions">
          <Link className="button button-light" to={"/research"}>
            Explore the research <FaArrowRight />
          </Link>
          <Link className="text-link light" to={"/projects"}>
            View selected projects <FaArrowRight />
          </Link>
        </div>
      </div>
      <div className="hero-art-wrap">
          <img src={LandingPageImage} alt="Landing page artwork" />
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
