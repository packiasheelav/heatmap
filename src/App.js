import React from "react";
import MyHeatMap from "./components/MyHeatMap";
//Finland Covid daily vaccination data
import testHeatData from "./data/testData.json";

function App() {
  return (
    <div className="App">
      <MyHeatMap heatData={testHeatData} />
    </div>
  );
}
export default App;
