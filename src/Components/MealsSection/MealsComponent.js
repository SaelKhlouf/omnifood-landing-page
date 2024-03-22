import MealCardComponent from "./MealCardComponent";
import DietColorEnum from "./DietsEnum";
import { IoCheckmark } from "react-icons/io5";

function MealsComponent() {
  const recipes = [
    {
      id: "meal-1.jpg",
      diets: ["VEGETARIAN"],
      title: "Japanese Gyozas",
      calories: 650,
      nutriScore: 74,
      rating: 4.9,
      numberOfRatings: 537,
    },
    {
      id: "meal-2.jpg",
      diets: ["VEGAN", "PALEO"],
      title: "Avocado Salad",
      calories: 400,
      nutriScore: 92,
      rating: 4.8,
      numberOfRatings: 441,
    },
  ];

  return (
    <section className="meals-section">
      <div className="secondary-header-container meals-section-secondary-header-container">
        <p className="subheading">meals</p>
        <h2 className="secondary-header">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="meals-section-content">
        <MealCardComponent {...recipes[0]}></MealCardComponent>

        <MealCardComponent {...recipes[1]}></MealCardComponent>

        <div>
          <h3 className="means-section-diets-subheading">
            Works with any diet:
          </h3>
          <ul className="means-section-diets-list">
            {Object.keys(DietColorEnum).map((dietName) => (
              <li key={dietName} className="means-section-diets-list-item">
                <IoCheckmark className="svg" size="3rem" />
                <span className="means-section-diets-list-item-name">
                  {dietName}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="meals-section-all-recipes-container">
        <a className="meals-section-all-recipes" href="#">
          See all recipes &#10141;
        </a>
      </div>
    </section>
  );
}

export default MealsComponent;
