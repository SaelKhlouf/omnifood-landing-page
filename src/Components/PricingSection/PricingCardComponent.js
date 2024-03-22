import { IoCheckmark, IoCloseOutline } from "react-icons/io5";

function PricingCardComponent({ title, price, desc, features, featured }) {
  return (
    <div className={`pricing-card ${featured && "pricing-card--featured"}`}>
      <header className="pricing-card-header">
        <h3 className="pricing-card-title">{title}</h3>
        <p className="pricing-card-price">
          <span>$</span>
          {price}
        </p>
        <p className="pricing-card-desc">{desc}</p>
      </header>

      <ul className="pricing-card-features-container">
        {features.map((feature) => (
          <li key={feature.id}>
            {feature.included === true ? (
              <IoCheckmark className="svg" size="3rem" />
            ) : (
              <IoCloseOutline className="svg" size="3rem" />
            )}

            <p>{feature.text}</p>
          </li>
        ))}
      </ul>

      <a href="#" className="btn btn--primary btn--padding-200 margin-top-100">
        Start eating well
      </a>
    </div>
  );
}

export default PricingCardComponent;
