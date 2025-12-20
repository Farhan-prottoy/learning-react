import "./App.css";
import Card from "./components/Card";

function App() {
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
