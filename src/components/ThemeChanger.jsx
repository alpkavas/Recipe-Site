import { useContext } from "react";
import "../styles/ThemeChanger.css";
import dark from "../assets/dark.svg";
import light from "../assets/light.svg";
import { ThemeContext } from "../contexts/ThemeContext";

const themeColors = ["danger", "primary", "warning", "success"];

export default function ThemeChanger() {
  const { changeColor, mode, changeMode } = useContext(ThemeContext);

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="container theme-selector">
      <div className="mode-toggle">
        <img
          src={mode === "dark" ? dark : light}
          alt="dark mode"
          onClick={toggleMode}
        />
      </div>
      <div className="theme-links">
        {themeColors.map(color => (
          <span
            onClick={() => changeColor(color)}
            key={color}
            className={`bg-${color}`}></span>
        ))}
      </div>
    </div>
  );
}
