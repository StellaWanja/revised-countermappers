import "./styles/SplitPage.css";

function SplitPage({ visual, children, dark = false }) {
  return (
    <section
      className={`page split-page ${dark ? "section-dark" : "section-light"}`}
    >
      <aside className="split-visual">{visual}</aside>
      <div className="split-scroll">
        <div className="split-content">{children}</div>
      </div>
    </section>
  );
}

export default SplitPage;
