import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
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

  const weights = [
    {
      value: "gram",
    },
    {
      value: "kilogram",
    },
  ];

  const [weight, setWeight] = React.useState("gram");

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

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
    checkedB: false,
    checkedC: true,
  });

  const handleChangePreorder = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const RedRadio = withStyles({
    root: {
      color: "red",
      "&$checked": {
        color: "red",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <b>Berat & Pengiriman</b>
        </Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Berat Produk
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              select
              value={weight}
              onChange={handleChangeWeight}
            >
              {weights.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={8}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Ukuran
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Panjang"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">cm</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Lebar"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">cm</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Tinggi"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">cm</InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Asuransi Pengiriman
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="Wajib"
              >
                <FormControlLabel
                  value="Wajib"
                  control={<RedRadio />}
                  label="Wajib"
                />
                <FormControlLabel
                  value="Opsional"
                  control={<RedRadio />}
                  label="Opsional"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Layanan Pengiriman
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue=""
              >
                <FormControlLabel
                  value="Standar"
                  control={<RedRadio />}
                  label="Standar"
                />
                <FormControlLabel
                  value="Custom"
                  control={<RedRadio />}
                  label="Custom"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Preorder
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.checkedB}
                  onChange={handleChangePreorder}
                  name="checkedB"
                />
              }
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
