import SplitPage from "./SplitPage";
import ProfileImg from "./assets/practice-prof.png";
import { practice } from "./constants";
import { FaArrowRight } from "react-icons/fa";
import "./styles/Practice.css";

function PracticePage() {
  return (
    <SplitPage
      dark={false}
      visual={
        <div className="visual-stack practice-visual">
          <img src={ProfileImg} alt="Practice Artwork" />
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
