import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/details/Detail";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Create from "./pages/create/Create";
import MainLayout from "./layouts/MainLayout";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={`bg-${mode}`} id="App">
      <MainLayout />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="details/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
