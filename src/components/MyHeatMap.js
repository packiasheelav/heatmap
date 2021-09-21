import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import HeatMapLines from "./HeatMapLines";

const MyHeatMap = ({ heatData }) => {
  if (heatData === undefined) {
    heatData = [];
  }

  return (
    <Container>
      <Grid item xs={12}>
        <HeatMapLines heatData={heatData} />
      </Grid>
    </Container>
  );
};
export default MyHeatMap;
