import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";
import useFetch from "../../hooks/useFetch";
import { ThemeContext } from "../../contexts/ThemeContext";

function Create() {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [malzeme, setMalzeme] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [resim, setResim] = useState("");
  const [url, setUrl] = useState("");
  const [hazirlanis, setHazirlanis] = useState("");
  const malzemeInput = useRef(null);
  const navigate = useNavigate();
  const { color, mode } = useContext(ThemeContext);

  const handlesubmit = e => {
    e.preventDefault();
    postData({ baslik, aciklama, malzemeler, hazirlanis, resim, url });
  };

  const handleAdd = e => {
    const item = malzeme.trim();

    if (item && !malzemeler.includes(item)) {
      setMalzemeler(prevItems => [...prevItems, item]);
      setMalzeme("");
      malzemeInput.current.focus();
      malzemeInput.current.value = "";
    }
  };

  const { postData, data } = useFetch("http://localhost:3000/tarifler", "POST");

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h2 className="mb-4 d-flex justify-content-center bg-info text-dark border border-info bg-opacity-10 rounded-2">
          Yeni Tarif Ekle
        </h2>

        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="baslik" className="fom-label">
              Başlık:
            </label>
            <input
              type="text"
              name="baslik"
              id="baslik"
              className="form-control"
              placeholder="Yemeğin Adı"
              onChange={e => setBaslik(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="aciklama" className="fom-label">
              Açıklama:
            </label>
            <input
              type="text"
              name="aciklama"
              id="aciklama"
              className="form-control"
              placeholder="Bir açıklama giriniz"
              onChange={e => setAciklama(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="malzemeler">
              Malzemeler
              {malzemeler.map((item, i) => (
                <ul>
                  <li key={i}>{item}</li>
                </ul>
              ))}
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Malzemeleri giriniz."
                ref={malzemeInput}
                onChange={e => setMalzeme(e.target.value)}
              />
              <button
                className={`btn btn-${color}`}
                type="button"
                onClick={handleAdd}>
                +
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="resim" className="fom-label">
              Resim:
            </label>
            <input
              type="text"
              name="resim"
              id="resim"
              className="form-control"
              placeholder="Resim ekleyin"
              onChange={e => setResim(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="url" className="fom-label">
              Url:
            </label>
            <input
              type="text"
              name="url"
              id="url"
              className="form-control"
              placeholder="Site adresi ekleyin"
              onChange={e => setUrl(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="aciklama" className="fom-label">
              Hazırlanışı:
            </label>
            <textarea
              name="hazirlanis"
              id="hazirlanis"
              className="form-control"
              cols="10"
              rows="10"
              placeholder="Tarifi yazınız..."
              onChange={e => setHazirlanis(e.target.value)}
            />
          </div>
          <button type="submit" className={`btn btn-${color}`}>
            Ekle
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
