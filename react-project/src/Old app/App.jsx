import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import TilesContainer from "./components/TilesContainer";
// import Contact from "./components/Contact";
// import Project1 from "./components/Project1";
// import Footer from "./components/Footer";

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

      {/* <Project1 />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
