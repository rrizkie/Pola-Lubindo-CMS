import React from "react";
import {
  FormControlLabel,
  Switch,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";

export default function SimpleCard() {
  const classes = useStyles();

  const IOSSwitch = () => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.switchRoot,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
      />
    );
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <b>Diskon</b>
        </Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Status
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                />
              }
              label="Tidak Aktif"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
