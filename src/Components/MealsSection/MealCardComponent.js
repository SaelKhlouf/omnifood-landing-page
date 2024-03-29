import TagComponent from "./TagComponent";
import DietColorEnum from "./DietsEnum";
import {
  IoRestaurantOutline,
  IoFlameOutline,
  IoStarOutline,
} from "react-icons/io5";

function MealCardComponent({
  id,
  diets,
  title,
  calories,
  nutriScore,
  rating,
  numberOfRatings,
}) {
  return (
    <div className="meal-card">
      <img
        src={`./img/meals/${id}`}
        className="meal-card-image"
        alt="meal card"
      ></img>
      <div className="meal-card-content">
        <div className="meal-card-diets-list">
          {diets.map((diet) => {
            return (
              <TagComponent
                key={diet}
                name={diet}
                backgroundColor={DietColorEnum[diet.toLowerCase()]}
              ></TagComponent>
            );
          })}
        </div>

        <h3 className="meal-title">{title}</h3>

        <ul className="meal-features-list">
          <li className="meal-feature-list-item">
            <IoFlameOutline size="2.5rem" className="svg" />

            <div className="fs-100">
              <span className="fw-300">{calories}</span> calories
            </div>
          </li>

          <li className="meal-feature-list-item">
            <IoRestaurantOutline size="2.5rem" className="svg" />

            <div className="fs-100">
              NutriScore ® <span className="fw-300">{nutriScore}</span>
            </div>
          </li>

          <li className="meal-feature-list-item">
            <IoStarOutline size="2.5rem" className="svg" />

            <div className="fs-100">
              <span className="fw-300">{rating}</span> rating{" "}
              {`(${numberOfRatings})`}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MealCardComponent;
