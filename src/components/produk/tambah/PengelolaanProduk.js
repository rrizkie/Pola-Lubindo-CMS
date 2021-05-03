import React from "react";
import {
  FormControlLabel,
  Grid,
  Switch,
  TextField,
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
          root: classes.switch,
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
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <b>Pengelolaan Produk</b>
        </Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Status Produk
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
              label="Aktif"
            />
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Stok Produk
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              SKU
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
