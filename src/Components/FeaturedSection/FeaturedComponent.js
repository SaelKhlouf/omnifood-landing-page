function FeaturedComponent() {
  const logos = [
    {
      id: "business-insider.png",
    },
    {
      id: "forbes.png",
    },
    {
      id: "techcrunch.png",
    },
    {
      id: "the-new-york-times.png",
    },
    {
      id: "usa-today.png",
    },
  ];

  return (
    <section className="featured-section">
      <h2 className="featured-header">as featured in</h2>
      <div className="featured-images">
        {logos.map((logo) => (
          <img
            key={logo.id}
            className="featured-img"
            src={`./img/logos/${logo.id}`}
          ></img>
        ))}
      </div>
    </section>
  );
}

export default FeaturedComponent;
