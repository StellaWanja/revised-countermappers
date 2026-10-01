
function SectionLabel({ index, label }) {
  return (
    <div className="section-label">
      <span>/{index}</span>
      <span>{label}</span>
    </div>
  );
}

function SplitPage({
  label,
  index,
  visual,
  children,
  dark = false,
  visualMeta = "COUNTERMAPPERS / RESEARCH ARCHIVE",
}) {
  return (
    <section
      className={`page split-page ${dark ? "section-dark" : "section-light"}`}
    >
      <aside className="split-visual">
        {visual}
        <div className="split-visual-meta">{visualMeta}</div>
      </aside>
      <div className="split-scroll">
        <div className="split-content">
          <SectionLabel index={index} label={label} />
          {children}
        </div>
      </div>
    </section>
  );
}

export default SplitPage;
