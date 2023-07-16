import React from "react";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch";
import "./home.css";

function Home() {
  const {
    data: recipes,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/tarifler");

  return (
    <div className="row mt-3">
      {isLoading && <div className="alert alert-warning">Yükleniyor...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {recipes &&
        recipes.map(recipe => <ProductCard key={recipe.id} recipe={recipe} />)}
    </div>
  );
}

export default Home;
