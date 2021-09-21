import React from "react";
import HeatMapHeaderLine from "./HeatMapHeaderLine";
import HeatMapLine from "./HeatMapLine";
import { processData } from "../handlers/DataHandler";
import { days } from "../handlers/common";

const HeatMapLines = ({ heatData }) => {
  const processedData = processData({ heatData });
  return (
    <>
      <HeatMapHeaderLine />
      {processedData.map((entry, index) => (
        <HeatMapLine name={days[index]} lineData={entry} />
      ))}
    </>
  );
};
export default HeatMapLines;
