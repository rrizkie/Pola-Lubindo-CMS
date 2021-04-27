import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  Switch,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import TableKomisi from "../tambah/TableKomisi";
import useStyles from "./styles";

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#52d869",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.paper}>
      <Typography variant="h5" gutterBottom align="center">
        <b>Komisi</b>
      </Typography>
      <Grid container spacing={3} alignItems="center">
        {/* Status */}
        <Grid item xs={3}>
          Status
        </Grid>
        <Grid item xs={9}>
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

        {/* Berlaku sebesar */}
        <Grid item xs={3}>
          Berlaku sebesar
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="10"
            id="standard-start-adornment"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={7}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Custom komisi"
          />
        </Grid>

        {/* Checkbox */}
        <Grid item xs={12}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Lucas Oil"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Virus Keeper"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Anderol"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Tacbecon"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Pola Paint"
            />
          </FormGroup>
        </Grid>
      </Grid>
      <TableKomisi />
      <div className={classes.button}>
        <Button variant="outlined">Batal</Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.btnSave}
        >
          Simpan
        </Button>
      </div>
    </div>
  );
}
