import SplitPage from "./SplitPage"
import MapArtwork from "./MapArtwork"
import { notes } from "./constants"
import { FaArrowRight } from "react-icons/fa"

function NotesPage() {
  return (
    <SplitPage
      label="Field Notes"
      index="04"
      dark={false}
      visual={
        <div className="visual-stack">
          <MapArtwork variant={4} />
          <span className="visual-index">04 / FIELD NOTES</span>
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
          <article className="note-row-page" key={note.title}>
            <div className="note-date">{note.date}</div>
            <div className="note-index">0{index + 1}</div>
            <div className="note-body">
              <span>{note.category}</span>
              <h3>{note.title}</h3>
            </div>
            <FaArrowRight />
          </article>
        ))}
      </div>
      </SplitPage>
  )
}

export default NotesPage