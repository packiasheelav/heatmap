import Grid from "@material-ui/core/Grid";
import { headerNamePosition, weeks } from "../handlers/common";
import StylePaper from "./StylePaper";

const HeatMapHeaderLine = () => {
  return (
    <Grid container justifyContent="center" wrap="nowrap">
      {weeks.map((value) => (
        <Grid key={value}>
          <StylePaper
            name={headerNamePosition[value]}
            colorLevelCode={"#FFFFFF"}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default HeatMapHeaderLine;
