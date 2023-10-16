import "./App.css";
import RecipeCard from "./components/RecipeCard";
import { AiOutlineSearch } from "react-icons/ai";

const App = () => {
  return (
    <div className="app-container">
      <div className="header">
        <img src="/hero-image.jpg"></img>
        <div className="title">My Recipe App</div>
      </div>
      <div className="tabs">
        <h1>Recipe Search</h1>
        <h1>Favourites</h1>
      </div>

      <>
        <form>
          <input
            type="text"
            required
            placeholder="Enter a search term ..."
          ></input>
          <button type="submit">
            <AiOutlineSearch size={40} />
          </button>
        </form>

        <div className="recipe-grid">
          <RecipeCard />
        </div>

        <button className="view-more-button">View More</button>
      </>
    </div>
  );
};

export default App;
