import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";

import TilesContainer from "./components/TilesContainer";
import Footer from "./components/Footer";

const App = () => {
  const [lightMode, setLightMode] = useState(true);

  const toggleTheme = () => {
    setLightMode(!lightMode);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", lightMode ? "dark" : "light");
  }, [lightMode]);

  return (
    <div id="theme">
      <Navbar toggleTheme={toggleTheme} currentTheme={lightMode} />
      <TilesContainer />
      <Footer />
    </div>
  );
};

export default App;
