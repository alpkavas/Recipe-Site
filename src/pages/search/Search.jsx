import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../../components/ProductCard";
import { ThemeContext } from "../../contexts/ThemeContext";

function search() {
  const [searchParams] = useSearchParams();
  const queary = searchParams.get("q");

  const { mode } = useContext(ThemeContext);

  const url = "http://localhost:3000/tarifler?q=" + queary;

  const { data, isLoading, error } = useFetch(url);
  return (
    <div className="row mt-3">
      <h2 className={`text-${mode === "dark" ? "light" : "dark"}`}>
        Aranan Kelime "{queary}"
      </h2>
      <hr />
      {isLoading && <div className="alert alert-warning">Arama Bekleniyor</div>}
      {error && <div className="alert alert-warning">{error}</div>}

      {data &&
        data.map(recipe => <ProductCard key={recipe.id} recipe={recipe} />)}
    </div>
  );
}

export default search;
