import StepComponent from "./StepComponent";

function HowComponent() {
  const steps = [
    {
      id: "01",
      title: "Tell us what you like (and what not)",
      description:
        "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
    },
    {
      id: "02",
      title: "Approve your weekly meal plan",
      description:
        "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
    },
    {
      id: "03",
      title: "Receive meals at convenient time",
      description:
        "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
    },
  ];

  return (
    <section id="how" className="how-section">
      <div className="container">
        <p className="subheading">how it works</p>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="how-steps container grid">
        <StepComponent {...steps[0]}></StepComponent>
        <div className="how-image-box">
          <img
            src="./img/app/app-screen-1.webp"
            className="how-image"
            alt="app image"
          ></img>
        </div>

        <div className="how-image-box">
          <img
            src="./img/app/app-screen-2.webp"
            className="how-image"
            alt="app image"
          ></img>
        </div>
        <StepComponent {...steps[1]}></StepComponent>

        <StepComponent {...steps[2]}></StepComponent>
        <div className="how-image-box">
          <img
            src="./img/app/app-screen-3.webp"
            className="how-image"
            alt="app image"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default HowComponent;
