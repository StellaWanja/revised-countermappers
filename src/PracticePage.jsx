import SplitPage from "./SplitPage";
import MapArtwork from "./MapArtwork";
import { practice } from "./constants";
import { FaArrowRight } from "react-icons/fa";

function PracticePage() {
  return (
    <SplitPage
      label="Practice"
      index="03"
      dark={false}
      visual={
        <div className="visual-stack">
          <MapArtwork variant={3} />
          <span className="visual-index">03 / SPATIAL PRACTICE</span>
        </div>
      }
    >
      <div className="split-title">
        <h2>
          From critical inquiry to <em>spatial practice.</em>
        </h2>
        <p className="split-lede">
          Research is translated into practical forms through mapping,
          documentation, visualization, engagement, teaching and professional
          planning.
        </p>
      </div>

      <div className="practice-list-page">
        {practice.map(([num, title, body]) => (
          <article className="practice-row-page" key={num}>
            <span>{num}</span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
            <FaArrowRight />
          </article>
        ))}
      </div>
    </SplitPage>
  );
}

export default PracticePage;
