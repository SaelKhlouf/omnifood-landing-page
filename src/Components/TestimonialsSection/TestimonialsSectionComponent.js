import TestimonialComponent from "./TestimonialComponent";

function TestimonialsSectionComponent() {
  const testimonialsData = [
    {
      personImageId: "dave",
      personName: "Dave Bryson",
      testimonialText:
        "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    },
    {
      personImageId: "ben",
      personName: "Ben Hadley",
      testimonialText:
        "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    },
    {
      personImageId: "steve",
      personName: "Steve Miller",
      testimonialText:
        "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    },
    {
      personImageId: "hannah",
      personName: "Hannah Smith",
      testimonialText:
        "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    },
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <p className="subheading">testimonials</p>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className="testimonials-list">
          {testimonialsData.map((testimonialData) => (
            <TestimonialComponent
              key={testimonialsData.personImageId}
              {...testimonialData}
            ></TestimonialComponent>
          ))}
        </div>
      </div>

      <div className="gallery-container">
        {Array.from({ length: 12 }, (_, index) => index + 1).map(
          (imageNumber) => {
            return (
              <figure className="gallery-figure">
                <img
                  key={imageNumber}
                  src={`./img/gallery/gallery-${imageNumber}.jpg`}
                ></img>
              </figure>
            );
          }
        )}
      </div>
    </div>
  );
}

export default TestimonialsSectionComponent;
