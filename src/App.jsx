import { useState } from "react";
import {
  useNavigate,
  useLocation,
  Link,
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router";
import { FaArrowRight, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./index.css";
import Home from "./Home";
import ResearchPage from "./ResearchPage";
import ProjectsPage from "./ProjectsPage";
import IndividualProjectPage from "./IndividualProjectPage";
import PracticePage from "./PracticePage";
import NotesPage from "./NotesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import "./styles/App.css";
import "./styles/Header.css";

const navItems = [
  ["research", "Research"],
  ["projects", "Projects"],
  ["practice", "Practice"],
  ["notes", "Field Notes"],
  ["about", "About"],
  ["contact", "Contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pathFor = (id) => (id === "home" ? "/" : `/${id}`);

  return (
    <div className="site-shell">
      {/* HEADER */}
      <header className="topbar">
        <div className="header-left">
          <button
            className="menu-button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <Link className="wordmark" to="/" aria-label="CounterMappers home">
            Counter<span>Mappers</span>
          </Link>
        </div>

        <nav
          id="primary-navigation"
          className={`main-nav ${menuOpen ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          {/* Close button for overlay */}{" "}
          <button
            className="close-button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            <span /> <span />
          </button>
          <div className="nav-links">
            {navItems.map(([id, label]) => (
              <NavLink
                key={id}
                to={pathFor(id)}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
          {/* CTA button inside mobile overlay */}
          <button
            className="overlay-cta"
            onClick={() => {
              setMenuOpen(false);
              navigate("/contact");
            }}
          >
            Start a conversation <FaArrowRight />
          </button>
        </nav>

        {/* Desktop / tablet CTA */}
        <button className="top-cta" onClick={() => navigate("/contact")}>
          Start a conversation <FaArrowRight />
        </button>
      </header>

      {/* SIDE MENU */}
      <aside className="rail" aria-label="Section navigation">
        <div />
        <div className="rail-bottom">
          <Link to="/" className="rail-mark">
            <FaTwitter />
          </Link>
          <Link to="/" className="rail-mark">
            <FaLinkedin />
          </Link>
          <Link to="/" className="rail-mark">
            <FaYoutube />
          </Link>
        </div>
      </aside>

      {/*  Main */}
      <main key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<IndividualProjectPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
