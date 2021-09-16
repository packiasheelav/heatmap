import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { headerNamePosition, weeks } from "../handlers/common"

const useStyles = makeStyles(() => ({
    Nopaper: {
        height: "17px",
        width: "18px",
        border: "2px solid white",
        fontSize: '0.7rem',
    }
}));

const HeatMapHeaderLine = () => {
    const classes = useStyles();
    return (<Grid container justifyContent="center" wrap="nowrap">
        {weeks.map((value) => (
            <Grid key={value} >
                <Paper variant="outlined" square className={classes.Nopaper}>
                    {headerNamePosition[value]}
                </Paper>
            </Grid>
        ))}
    </Grid>);
}
export default HeatMapHeaderLine;