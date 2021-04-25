import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Checkbox,
  FormGroup,
  Grid,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { FormControlLabel, Switch } from "@material-ui/core";

import TableKomisi from "./TableKomisi";
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
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const RedCheckbox = () => (
    <Checkbox color="default" className={classes.checkbox} />
  );

  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <b>Komisi</b>
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
              label="Aktif"
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Berlaku sebesar
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              variant="outlined"
              size="small"
              value="10"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <RedCheckbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Custom Komisi"
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <RedCheckbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Lucas Oil"
              />
              <FormControlLabel
                control={
                  <RedCheckbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Virus Keeper"
              />
              <FormControlLabel
                control={
                  <RedCheckbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Anderol"
              />
              <FormControlLabel
                control={
                  <RedCheckbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Tacbecon"
              />
              <FormControlLabel
                control={
                  <RedCheckbox
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                  />
                }
                label="Pola Paint"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <TableKomisi />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
