const ShimmerCard = () => {
  return (
    <div className="Shimmer-card">
      <div className="shimmerBG media"></div>
      <div className="shimmerBG title-line end"></div>
      <div className="shimmerBG title-line"></div>
      <div className="shimmerBG title-line"></div>
    </div>
  );
};

const Shimmer = () => {
  const numOfCards = 10;

  return (
    <div className="Shimmer-container">
      {Array.from({ length: numOfCards }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
