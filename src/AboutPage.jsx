import SplitPage from "./SplitPage";

function AboutPage() {
   return (
    <SplitPage
      label="About"
      index="05"
      dark={true}
      visual={
        <div className="portrait-panel">
          <div className="portrait-grid" />
          <div className="portrait-initials">DNM</div>
          <span>RESEARCHER / URBANIST</span>
        </div>
      }
      visualMeta="URBANIST / PH.D. RESEARCHER / PHYSICAL PLANNER"
    >
      <div className="split-title">
        <h2>
          Urbanist, researcher, and planner investigating how spatial knowledge
          shapes communities and territories.
        </h2>
      </div>

      <div className="bio-block-page">
        <span className="bio-label">IDENTITY</span>
        <p>
          I am an Urbanist and Ph.D. Researcher at the Planning and Development
          (P&amp;D) Research Unit, KU Leuven, Belgium. I am also a Tutorial
          Fellow in the Department of Spatial Planning and Design at The
          Technical University of Kenya, and a Registered and Practicing
          Physical Planner in Kenya.
        </p>
      </div>

      <div className="bio-block-page">
        <span className="bio-label">RESEARCH</span>
        <p>
          My Ph.D. research sits at the intersection of{" "}
          <strong>
            critical mapping, Indigenous communities, and social innovation
          </strong>
          . I investigate whether—and under which conditions—mapping and its
          agency can contribute to community empowerment.
        </p>
      </div>

      <div className="bio-block-page">
        <span className="bio-label">THE INQUIRY</span>
        <p>
          The research critically examines who produces maps, whose knowledge is
          represented, how spatial power is constructed, and what mapping
          processes do to territory and communities. It works across three
          connected spectrums:{" "}
          <strong>
            Spatial Dynamics, Spatial Representation, and Collective Action.
          </strong>
        </p>
      </div>

      <div className="about-questions">
        <p>Who has the authority to map?</p>
        <p>Whose knowledge becomes visible?</p>
        <p>What remains invisible?</p>
        <p>What does mapping actually do to territory?</p>
      </div>

      <div className="framework-mini">
        <div>
          <span>01</span>
          <h3>Critical Cartography</h3>
          <p>
            An analytical framework for critically evaluating maps, mapping
            processes, authorship, representation and power.
          </p>
        </div>
        <div>
          <span>02</span>
          <h3>Social Innovation</h3>
          <p>
            An operational framework for engaging communities and stakeholders
            toward collective and socio-political transformation.
          </p>
        </div>
      </div>

      <div className="bio-block-page">
        <span className="bio-label">CONTEXT</span>
        <p>
          Situated in the rapidly urbanizing context of{" "}
          <strong>Coastal Kenya</strong>, the research explores embedded and
          alternative cartographic representations that can capture Indigenous
          and localized knowledge systems and their potential for collective
          action.
        </p>
      </div>

      <div className="affiliations-page">
        <div>
          <span>01</span>
          <strong>KU Leuven</strong>
          <small>Planning &amp; Development Research Unit</small>
        </div>
        <div>
          <span>02</span>
          <strong>Technical University of Kenya</strong>
          <small>Department of Spatial Planning &amp; Design</small>
        </div>
        <div>
          <span>03</span>
          <strong>Kenya</strong>
          <small>Registered &amp; Practicing Physical Planner</small>
        </div>
      </div>
    </SplitPage>
  );

}

export default AboutPage