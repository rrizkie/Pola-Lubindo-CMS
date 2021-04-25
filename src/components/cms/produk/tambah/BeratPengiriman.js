import React from "react";
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
} from "@material-ui/core";
import useStyles from "./styles";

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
    checkedB: false,
    checkedC: true,
  });

  const handleChangePreorder = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const RedRadio = () => <Radio color="default" className={classes.checkbox} />;

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
