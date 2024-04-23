import React from "react";
import WineStats from "./component/WineStats";
import { data } from "./utils/data";
import '@mantine/core/styles.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <WineStats data={data} />
    </div>
  );
}

export default App;
