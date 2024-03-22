function TagComponent({ name, backgroundColor }) {
  return (
    <div
      className="tag-component"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <span>{name}</span>
    </div>
  );
}

export default TagComponent;
