const ShimmerMenuItem = () => {
  return (
    <div style={{ marginTop: "1rem", display: "flex" }}>
      <div style={{ width: "90%" }}>
        <div className="shimmerBG title-line end"></div>
        <div className="shimmerBG title-line end"></div>
        <div className="shimmerBG title-line end"></div>
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG title-line"></div>
      </div>
      <div
        className="shimmerBG"
        style={{
          borderRadius: "1.5rem",
          minWidth: "10rem",
          margin: "1rem",
        }}
      ></div>
    </div>
  );
};

const ShimmerMenu = () => {
  return (
    <div
      className="Shimmer-container"
      style={{ width: "96.2%", justifyContent: "center" }}
    >
      <div
        style={{
          width: "55%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div
          className="Shimmer-menu-container"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
          }}
        >
          <div
            className="shimmerBG"
            style={{
              borderRadius: "1.5rem",
              minWidth: "10rem",
              margin: "2rem",
            }}
          ></div>
          <div style={{ width: "100%", margin: "2rem 1rem 0.5rem 1rem" }}>
            <div className="shimmerBG title-line end"></div>
            <div className="shimmerBG title-line end"></div>
            <div className="shimmerBG title-line end"></div>
            <div className="shimmerBG title-line"></div>
          </div>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ShimmerMenuItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
