import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  Nopaper: {
    height: "17px",
    width: "19px",
    border: "2px solid white",
    fontSize: "0.6rem",
  },
  paper: ({ colorLevelCode }) => ({
    height: "17px",
    width: "18px",
    border: "2px solid white",
    backgroundColor: colorLevelCode || "#eee",
  }),
}));

const colors = ["#eee", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];
//const colors =['#dae2ef', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']

const StylePaper = ({ name, weekNumber, lineData }) => {
  let colorLevelCode = "#eee";
  let toolTipTitle = "";
  if (lineData !== undefined && lineData.length > 0) {
    const fld = lineData.filter((ld) => ld.weeknumber === weekNumber);
    if (fld.length > 0) {
      colorLevelCode = colors[fld[0].level];
      toolTipTitle = "Count:" + fld[0].count + " \nDate:" + fld[0].date;
    }
  }
  const classes = useStyles({ colorLevelCode });
  return  name || weekNumber === 0 ? (
    <Paper variant="outlined" square className={classes.Nopaper}>
      {name}
    </Paper>
  ) : (
    <Tooltip title={toolTipTitle}>
      <Paper variant="outlined" square className={classes.paper} />
    </Tooltip>
  );
};

export default StylePaper;
