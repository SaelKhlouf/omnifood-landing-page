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
    <section id="meals" className="meals-section">
      <div className="container center-text">
        <p className="subheading">meals</p>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container meals-section-content grid">
        <MealCardComponent {...recipes[0]}></MealCardComponent>

        <MealCardComponent {...recipes[1]}></MealCardComponent>

        <div className="diets">
          <h3 className="meals-section-diets-subheading">
            Works with any diet:
          </h3>
          <ul className="meals-section-diets-list">
            {Object.keys(DietColorEnum).map((dietName) => (
              <li key={dietName} className="meals-section-diets-list-item">
                <IoCheckmark className="svg" size="3rem" />
                <span className="meals-section-diets-list-item-name">
                  {dietName}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container center-text all-recipes">
        <a className="link" href="#">
          See all recipes &#10141;
        </a>
      </div>
    </section>
  );
}

export default MealsComponent;
