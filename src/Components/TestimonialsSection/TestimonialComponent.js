function TestimonialComponent({ personImageId, personName, testimonialText }) {
  return (
    <div className="testimonial-container">
      <img
        src={`./img/customers/${personImageId}.webp`}
        className="testimonial-person-image"
        alt="testimonials"
      ></img>
      <blockquote className="testimonial-text">{testimonialText}</blockquote>
      <p className="testimonial-person-name">&#9866; {personName}</p>
    </div>
  );
}

export default TestimonialComponent;
