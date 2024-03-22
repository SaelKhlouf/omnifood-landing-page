import "./App.css";
import FeaturedComponent from "./Components/FeaturedSection/FeaturedComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import HeroComponent from "./Components/HeroSection/HeroComponent";
import HowComponent from "./Components/HowSection/HowComponent";
import MealsComponent from "./Components/MealsSection/MealsComponent";
import PricingComponent from "./Components/PricingSection/PricingComponent";
import TestimonialsSectionComponent from "./Components/TestimonialsSection/TestimonialsSectionComponent";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <main className="main">
        <HeroComponent></HeroComponent>
        <FeaturedComponent></FeaturedComponent>
        <HowComponent></HowComponent>
        <MealsComponent></MealsComponent>
        <TestimonialsSectionComponent></TestimonialsSectionComponent>
        <PricingComponent></PricingComponent>
      </main>
    </>
  );
}

export default App;
