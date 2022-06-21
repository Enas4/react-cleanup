import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  const actualWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
   const showWidth= window.addEventListener("resize", actualWidth);
    return () => {
        window.removeEventListener(showWidth)
    };
  }, []);

  return (
    <div className="App">
      <p>resize window</p>
      <p>{windowWidth}</p>
    </div>
  );
}

export default App;
