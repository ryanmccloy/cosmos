function Blob({
  width = "250px",
  height = "250px",
  top = "130px",
  left = "100px",
}) {
  {
    /* Blob and stars animation is in index.css */
  }
  return (
    <div
      className="blob absolute"
      style={{
        width: width,
        height: height,
        top: top,
        left: left,
      }}
    >
      <div className="stars"></div>
    </div>
  );
}

export default Blob;
