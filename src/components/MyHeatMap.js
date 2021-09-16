import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import HeatMapHeaderLine from "./HeatMapHeaderLine";
import HeatMapLine from "./HeatMapLine";
import { processData } from "../handlers/DataHandler";

const MyHeatMap = ({ heatData }) => {
  if (heatData === undefined) {
    heatData = [];
  }
  const processedData = processData({ heatData });

  return (
    <Container>
      <Grid item xs={12}>
        <Grid container justifyContent="center" wrap="nowrap">
          <HeatMapHeaderLine />
        </Grid>
        <Grid container justifyContent="center" wrap="nowrap">
          <HeatMapLine lineData={processedData.day0HeatEntry} />
        </Grid>
        <Grid container justifyContent="center" wrap="nowrap">
          <HeatMapLine name="Mon" lineData={processedData.day1HeatEntry} />
        </Grid>
        <Grid container justifyContent="center" wrap="nowrap">
          <HeatMapLine lineData={processedData.day2HeatEntry} />
        </Grid>
        <Grid container justifyContent="center" wrap="nowrap">
          <HeatMapLine name="Wed" lineData={processedData.day3HeatEntry} />
        </Grid>
        <Grid container justifyContent="center" wrap="nowrap">
          <HeatMapLine lineData={processedData.day4HeatEntry} />
        </Grid>
        <Grid container justifyContent="center" wrap="nowrap">
          <HeatMapLine name="Fri" lineData={processedData.day5HeatEntry} />
        </Grid>
        <Grid container justifyContent="center" wrap="nowrap">
          <HeatMapLine lineData={processedData.day6HeatEntry} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default MyHeatMap;
