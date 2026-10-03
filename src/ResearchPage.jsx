import SplitPage from "./SplitPage";
import ResearchArtwork from "./assets/Minimalist-urban-map.png";
import "./styles/Research.css";

function ResearchPage() {
  return (
    <SplitPage
      dark={false}
      visual={
        <div className="visual-stack research-visual">
          <img src={ResearchArtwork} alt="Research Artwork" />
        </div>
      }
    >
      <div className="split-title">
        <h2>
          Maps do more than represent territory.{" "}
          <em>They participate in producing it.</em>
        </h2>
        <p className="split-lede">
          My research examines how mapping and its agency can contribute to
          community empowerment, and the conditions under which it may enable—or
          constrain—collective action and socio-political transformation.
        </p>
      </div>

      <div className="research-question">
        <span>?</span>
        <div>
          <p className="kicker">RESEARCH QUESTION</p>
          <p>
            What happens when we question who gets to map, what counts as
            spatial knowledge, and how that knowledge shapes territory?
          </p>
        </div>
      </div>

      <div className="framework-stack">
        {[
          [
            "01",
            "Spatial Dynamics",
            "How territory is produced",
            "Power, territory, colonial legacies, urbanization, spatial inequality, land and resource relations, and community relationships.",
          ],
          [
            "02",
            "Spatial Representation",
            "Who represents territory — and how",
            "Cartographic ontology, map authorship, representation, counter-mapping, Indigenous knowledge, alternative cartographies and visual narratives.",
          ],
          [
            "03",
            "Collective Action",
            "What spatial knowledge can make possible",
            "Community empowerment, social innovation, participation, collective knowledge, collaboration, resilience and socio-political transformation.",
          ],
        ].map(([num, title, sub, body]) => (
          <article className="framework-row" key={num}>
            <span>{num}</span>
            <div>
              <h3>{title}</h3>
              <p className="card-sub">{sub}</p>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="research-block">
        <p className="kicker">COUNTER-MAPPING</p>
        <h3>
          From mapping communities to <em>mapping with communities.</em>
        </h3>
        <p>
          Mapping is approached as a situated practice rather than a finished
          object. Oral narratives, community memories and localized knowledge
          can be translated into experimental spatial forms that can be read,
          questioned and acted upon.
        </p>
      </div>

      <div className="method-list">
        {[
          "Animated maps",
          "Interpretive diagrams",
          "Participatory maps",
          "Oral narratives",
          "Community memory",
          "Spatial imagery",
          "Rudimentary mapping",
        ].map((item, i) => (
          <span key={item}>
            <b>{String(i + 1).padStart(2, "0")}</b>
            {item}
          </span>
        ))}
      </div>
    </SplitPage>
  );
}

export default ResearchPage;
