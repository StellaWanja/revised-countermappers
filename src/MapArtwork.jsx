
function MapArtwork({ variant = 1 }) {
  return (
    <div className={`map-art map-art-${variant}`} aria-hidden="true">
      <div className="map-orbit orbit-1" />
      <div className="map-orbit orbit-2" />
      <div className="map-orbit orbit-3" />
      <div className="map-grid" />
      <div className="map-ribbon ribbon-1" />
      <div className="map-ribbon ribbon-2" />
      <div className="map-point point-1" />
      <div className="map-point point-2" />
      <div className="map-point point-3" />
      <div className="map-cross cross-1" />
      <div className="map-cross cross-2" />
      <span className="map-coord coord-1">04°07'S</span>
      <span className="map-coord coord-2">039°39'E</span>
      <span className="map-note note-1">oral memory</span>
      <span className="map-note note-2">territory</span>
    </div>
  );
}

export default MapArtwork