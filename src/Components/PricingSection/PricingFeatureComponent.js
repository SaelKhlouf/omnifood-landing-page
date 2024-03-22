import {
  IoInfiniteOutline,
  IoNutritionOutline,
  IoLeafOutline,
  IoPauseOutline,
} from "react-icons/io5";

function PricingFeatureComponent({ id, title, icon, desc }) {
  let iconDiv = null;

  switch (icon) {
    case "infinite":
      iconDiv = (
        <IoInfiniteOutline
          size="6.4rem"
          className="pricing-feature-svg"
        ></IoInfiniteOutline>
      );
      break;
    case "nutrition":
      iconDiv = (
        <IoNutritionOutline
          size="6.4rem"
          className="pricing-feature-svg"
        ></IoNutritionOutline>
      );
      break;
    case "leaf":
      iconDiv = (
        <IoLeafOutline
          size="6.4rem"
          className="pricing-feature-svg"
        ></IoLeafOutline>
      );
      break;
    case "pause":
      iconDiv = (
        <IoPauseOutline
          size="6.4rem"
          className="pricing-feature-svg"
        ></IoPauseOutline>
      );
      break;
  }

  return (
    <div className="feature">
      {iconDiv}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default PricingFeatureComponent;
