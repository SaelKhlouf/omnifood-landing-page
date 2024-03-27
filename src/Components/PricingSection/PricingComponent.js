import PricingCardComponent from "./PricingCardComponent";
import PricingFeatureComponent from "./PricingFeatureComponent";

function PricingComponent() {
  const plans = [
    {
      title: "STARTER",
      price: "399",
      desc: "per month. That's just $13 per meal!",
      features: [
        {
          id: "starter_1",
          text: "1 meal per day",
          included: true,
        },
        {
          id: "starter_2",
          text: "Order from 11am to 9pm",
          included: true,
        },
        {
          id: "starter_3",
          text: "Delivery is free",
          included: true,
        },
        {
          id: "starter_4",
          text: "Get access to latest recipes",
          included: false,
        },
      ],
      featured: false,
    },
    {
      title: "COMPLETE",
      price: "649",
      desc: "per month. That's just $11 per meal!",
      features: [
        {
          id: "COMPLETE_1",
          text: "2 meals per day",
          included: true,
        },
        {
          id: "COMPLETE_2",
          text: "Order 24/7",
          included: true,
        },
        {
          id: "COMPLETE_3",
          text: "Delivery is free",
          included: true,
        },
        {
          id: "COMPLETE_4",
          text: "Get access to latest recipes",
          included: true,
        },
      ],
      featured: true,
    },
  ];
  const plansDetails = [
    {
      id: "plan_details_1",
      title: "Never cook again!",
      icon: "infinite",
      desc: "Our subscriptions cover 365 days per year, even including major holidays.",
    },
    {
      id: "plan_details_2",
      title: "Local and organic",
      icon: "nutrition",
      desc: "Our cooks only use local, fresh, and organic products to prepare your meals.",
    },
    {
      id: "plan_details_3",
      title: "No waste",
      icon: "leaf",
      desc: "All our partners only use reusable containers to package all your meals.",
    },
    {
      id: "plan_details_4",
      title: "Pause anytime",
      icon: "pause",
      desc: "Going on vacation? Just pause your subscription, and we refund unused days.",
    },
  ];
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <p className="subheading">pricing</p>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container pricing-plans">
        <PricingCardComponent {...plans[0]}></PricingCardComponent>
        <PricingCardComponent {...plans[1]}></PricingCardComponent>
      </div>

      <aside className="container">
        {" "}
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </aside>

      <div className="container plans-shared-features-container grid">
        {plansDetails.map((planDetails) => (
          <PricingFeatureComponent
            key={planDetails.id}
            {...planDetails}
          ></PricingFeatureComponent>
        ))}
      </div>
    </section>
  );
}

export default PricingComponent;
