import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let MyObj = { Name: "Prottoy", Age: 25 };
  let secondObj = { Name: "Protoy", Age: 25 };
  let Arr = [1, 2, 3];
  let username = "Prottoy22";
  return (
    <>
      <Card username={username} btnTest={"Click Me"} />
      <Card username="Prottoy2" />
      <Card username="Prottoy3" someObj={secondObj} />
      <Card username="Prottoy4" NumberProp={Arr} />
    </>
  );
}

export default App;
