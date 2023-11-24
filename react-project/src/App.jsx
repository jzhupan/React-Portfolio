import Navbar from "./components/Navbar";
import BoxLayout from "./components/BoxLayout";
import { useEffect, useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div id="theme">
      <Navbar toggleTheme={toggleTheme} currentTheme={darkMode} />
      <BoxLayout />
    </div>
  );
};

export default App;
