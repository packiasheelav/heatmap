import Grid from "@material-ui/core/Grid";
import { weeks } from "../handlers/common";
import StylePaper from "./StylePaper";

const HeatMapLine = ({ name, lineData }) => {
  return (
    <Grid container justifyContent="center" wrap="nowrap">
      {weeks.map((value) => (
        <Grid key={value} item>
          {value === 0 ? (
            <StylePaper name={name} weekNumber={value} />
          ) : (
            <StylePaper lineData={lineData} weekNumber={value} />
          )}
        </Grid>
      ))}
    </Grid>
  );
};
export default HeatMapLine;
