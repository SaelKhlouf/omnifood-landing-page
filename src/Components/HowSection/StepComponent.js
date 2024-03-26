function StepComponent({ id, title, description }) {
  return (
    <div className="step">
      <h2 className="step-number">{id}</h2>

      <h3 className="heading-tertiary">{title}</h3>

      <p className="step-description">{description}</p>
    </div>
  );
}

export default StepComponent;
