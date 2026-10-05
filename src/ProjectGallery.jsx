import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./styles/ProjectGallery.css";

function ProjectGallery({ images, title }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  // arrow-key support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div className="gallery">
      <div className="gallery-main">
        <img
          src={images[index]}
          alt={`${title}, image ${index + 1} of ${count}`}
        />

        {count > 1 && (
          <>
            <button
              className="gallery-arrow left"
              onClick={prev}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              className="gallery-arrow right"
              onClick={next}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="gallery-thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
