import { AiOutlineHeart } from "react-icons/ai";

const RecipeCard = () => {
  return (
    <div className="recipe-card">
      <img src="https://placehold.co/600x400"></img>
      <div className="recipe-card-title">
        <span>
          <AiOutlineHeart size={25} />
        </span>
        <h3>RECIPE TITLE</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
