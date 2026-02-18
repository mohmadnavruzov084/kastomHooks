import { useState } from "react";
import reactLogo from "./images/react.svg";
import viteLogo from "/vite.svg";
import { useToggle } from "../shared/hooks/useToggle";
import { carsInfo } from "../shared/data/carsInfo.js";
import { Cars } from "../shared/hooks/Cars";
import { useLocalStorage } from "../shared/hooks/useLocalStorage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, toggleVisible] = useToggle(true);
  const [order, setOrder] = useLocalStorage([], "order");

  const addToOrder = (id) => {
    const newItem = carsInfo.find((item) => item.id === id);
    setOrder([...order, newItem]);
  };

  return (
    <div>
      <button onClick={toggleVisible}>toggle</button>
      {isVisible && (
        <>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} alt="" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>

            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      )}
      <br />
      <Cars items={carsInfo} addToOrder={addToOrder} />
    </div>
  );
}

export default App;
