function FeaturedComponent() {
  const logos = [
    {
      id: "business-insider.webp",
    },
    {
      id: "forbes.webp",
    },
    {
      id: "techcrunch.webp",
    },
    {
      id: "the-new-york-times.webp",
    },
    {
      id: "usa-today.webp",
    },
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="featured-header">as featured in</h2>
        <div className="featured-images">
          {logos.map((logo) => (
            <img
              key={logo.id}
              className="featured-img"
              src={`./img/logos/${logo.id}`}
              alt="pricing plan"
            ></img>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedComponent;
