import { Link } from "react-router"
import SplitPage from "./SplitPage"
import { notes } from "./constants"
import ProfileImg from "./assets/Coast4.jpg"
import { FaArrowRight } from "react-icons/fa"
import "./styles/Notes.css"

function NotesPage() {
  return (
    <SplitPage
      label="Field Notes"
      index="04"
      dark={false}
      visual={
        <div className="visual-stack notes-visual">
          <img src={ProfileImg} alt="Notes Artwork" />
        </div>
      }
      visualMeta="OBSERVATIONS / WRITING / RESEARCH"
    >
      <div className="split-title">
        <h2>
          Observations from the field. <em>Reflections from research.</em>
        </h2>
        <p className="split-lede">
          Writing and visual explorations around cities, maps, spatial justice,
          research methods and the histories embedded within urban environments.
        </p>
      </div>

      <div className="note-list-page">
        {notes.map((note, index) => (
          <Link to={`/projects/${note.link}`} className="note-row-page" key={note.title}>
            <div className="note-date">{note.date}</div>
            <div className="note-index">0{index + 1}</div>
            <div className="note-body">
              <span>{note.category}</span>
              <h3>{note.title}</h3>
            </div>
            <FaArrowRight />
          </Link>
        ))}
      </div>
      </SplitPage>
  )
}

export default NotesPage