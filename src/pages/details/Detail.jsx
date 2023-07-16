import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";
import useFetch from "../../hooks/useFetch";
import { ThemeContext } from "../../contexts/ThemeContext";

function Detail() {
  const { id } = useParams();

  const url = "http://localhost:3000/tarifler/" + id;

  const { data: recipe, isLoading, error } = useFetch(url);

  const { color, mode } = useContext(ThemeContext);

  return (
    <div className="row mt-3">
      {isLoading && <div className="alert alert-warning">Yükleniyor...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {recipe && (
        <>
          <div className="col-4">
            <img
              src={`/img/${recipe.resim}`}
              className="img-fluid rounded"
              alt={recipe.baslik}
            />
            <hr />
          </div>
          <div className={`col-8 text-${mode === "dark" ? "light" : "dark"}`}>
            <h5>{recipe.baslik}</h5>
            <p>{recipe.aciklama}</p>
            <ul>
              {recipe.malzemeler.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </div>
          <div
            className={`col-12 mt-3 text-${
              mode === "dark" ? "light" : "dark"
            }`}>
            <p>{recipe.hazirlanisi}</p>
            <a href={recipe.url} className={`btn btn-outline-${color}`}>
              Tarifi İncele
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
