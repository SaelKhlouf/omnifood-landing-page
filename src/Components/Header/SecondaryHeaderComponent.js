function SecondaryHeaderComponent({
  subheadingText,
  secondaryHeaderText,
  extraClassName,
}) {
  return (
    <div className={`secondary-header-container ${extraClassName}`}>
      <p className="subheading">{subheadingText}</p>
      <h2 className="secondary-header">{secondaryHeaderText}</h2>
    </div>
  );
}

export default SecondaryHeaderComponent;
