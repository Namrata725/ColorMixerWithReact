import { useState } from "react";
function App() {
  const colors = JSON.parse(localStorage.getItem("color"));
  const [red, setRed] = useState(colors && colors.red ? colors.red : "0");
  const [green, setGreen] = useState(
    colors && colors.green ? colors.green : "0"
  );
  const [blue, setBlue] = useState(colors && colors.blue ? colors.blue : "0");

  const save = () => {
    localStorage.setItem("color", JSON.stringify({ red, green, blue }));
  };
  return (
    <div className="mainDiv">
      <div
        className="colorDiv"
        style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      ></div>
      <h4>
        <u>Color Mixer</u>
      </h4>
      <label htmlFor="red">Red:</label>
      <input
        type="range"
        min={0}
        max={255}
        value={red}
        onChange={(event) => {
          setRed(event.target.value);
        }}
      />
      <label htmlFor="green">Green:</label>
      <input
        type="range"
        min={0}
        max={255}
        value={green}
        onChange={(event) => {
          setGreen(event.target.value);
        }}
      />
      <label htmlFor="blue">Blue:</label>
      <input
        type="range"
        min={0}
        max={255}
        value={blue}
        onChange={(event) => {
          setBlue(event.target.value);
        }}
      />

      <button onClick={save}>Save Color Combination</button>
    </div>
  );
}

export default App;
