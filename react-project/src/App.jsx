import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Squares from "./Components/Squares";

function App() {
  return (
    <ChakraProvider>
      <>
        <Squares />
      </>
    </ChakraProvider>
  );
}

export default App;
