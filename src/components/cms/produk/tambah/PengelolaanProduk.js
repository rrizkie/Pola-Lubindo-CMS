import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

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
