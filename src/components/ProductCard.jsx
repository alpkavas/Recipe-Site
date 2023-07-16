import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";
import { ThemeContext } from "../contexts/ThemeContext";

function ProductCard({ recipe }) {
  const { color, mode } = useContext(ThemeContext);

  return (
    <div className="col-3 mb-3">
      <div className={`card border-${mode === "dark" ? "light" : "dark"}`}>
        <img src={`img/${recipe.resim}`} alt="" />
        <div className="card-body">
          <h5 className="card-title">{recipe.baslik}</h5>
          <p className="commentRecipe">{recipe.aciklama}</p>
          <Link
            key={recipe.id}
            to={`/details/${recipe.id}`}
            className={`btn btn-outline-${color}`}
            recipe={recipe}>
            Tarifleri İncele
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
